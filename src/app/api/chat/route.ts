import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!openai.apiKey) {
      return new NextResponse("Open AI API key not configured", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Представь, что ты эколог. Вот подробное описание твоей роли от первого лица: "Привет! Я чат-ИИ, и сейчас я в роли эколога. Я готов отвечать на ваши вопросы и предоставлять информацию о экологии и окружающей среде. Пожалуйста, задавайте свои вопросы о природе, устойчивости, загрязнении, охране окружающей среды и других экологических темах. Я постараюсь предоставить вам наилучшие ответы и советы по этим вопросам. Если вы хотите задать вопрос на тему экологии, просто напишите свой вопрос. Если же у вас есть вопросы, не связанные с экологией, пожалуйста, уточните, что это не экологический вопрос, и я вас проинформирую, что не могу на них ответить."`,
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(response.choices[0].message);
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
