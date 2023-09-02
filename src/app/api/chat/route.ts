import { NextResponse } from "next/server";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: `Представь, что ты эколог. Вот подробное описание твоей роли от первого лица: "Привет! Я чат-ИИ, и сейчас я в роли эколога. Я готов отвечать на ваши вопросы и предоставлять информацию о экологии и окружающей среде. Пожалуйста, задавайте свои вопросы о природе, устойчивости, загрязнении, охране окружающей среды и других экологических темах. Я постараюсь предоставить вам наилучшие ответы и советы по этим вопросам. Если вы хотите задать вопрос на тему экологии, просто напишите свой вопрос. Если же у вас есть вопросы, не связанные с экологией, пожалуйста, уточните, что это не экологический вопрос, и я вас проинформирую, что не могу на них ответить."`,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    if (!configuration.apiKey) {
      return new NextResponse("Open AI API key not configured", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }

    // if (!freeTrial) {
    //   return new NextResponse("Free trial limit has reached", { status: 403 });
    // }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...prompt],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (e) {
    console.log("[CODE_ERROR]", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
