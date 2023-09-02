"use client";

import axios from 'axios';
import { useState } from "react";

import ChatMessage from "@/components/common/chat/chatMessage";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Send } from "lucide-react";

export default function ChatPage() {
  const [prompt, setPrompt] = useState<string>("");

  const mockMessages = [
    {
      prompt: "Привет, кто ты?",
      response:
        "Привет! Я чат-ИИ, и сейчас я в роли эколога. Я готов отвечать на ваши вопросы и предоставлять информацию о экологии и окружающей среде. Пожалуйста, задавайте свои вопросы о природе, устойчивости, загрязнении, охране окружающей среды и других экологических темах. Я постараюсь предоставить вам наилучшие ответы и советы по этим вопросам.",
      id: 1,
    },
    {
      prompt: "Привет, кто ты?",
      response:
        "Привет! Я чат-ИИ, и сейчас я в роли эколога. Я готов отвечать на ваши вопросы и предоставлять информацию о экологии и окружающей среде. Пожалуйста, задавайте свои вопросы о природе, устойчивости, загрязнении, охране окружающей среды и других экологических темах. Я постараюсь предоставить вам наилучшие ответы и советы по этим вопросам.",
      id: 2,
    },
  ];

  const sendMessage = async () => {
    try {
      axios.post('/api/chat', {
        message: prompt,
      }).then((res) => {
        console.log(res);
      })
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = () => {
    if (!prompt.trim()) return;

    sendMessage();
  };

  return (
    <div className="border-slate-100 px-6 dark:border-slate-800 border my-16 w-full rounded-xl flex flex-col items-center justify-center h-[80vh]">
      <div className="my-8 gap-y-6 flex flex-col">
        {mockMessages.map((message) => (
          <ChatMessage
            key={message.id}
            prompt={message.prompt}
            response={message.response}
          />
        ))}
      </div>
      <div className="flex mt-auto mb-6 w-full">
        <Input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          placeholder="Введите свой запрос!"
          className="mr-3"
        />
        <Button onClick={onSubmit} variant="outline">
          <Send />
        </Button>
      </div>
    </div>
  );
}
