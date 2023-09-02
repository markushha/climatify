"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import ChatMessage from "@/components/common/chat/chatMessage";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Empty from "@/components/common/empty";

export default function ChatPage() {
  const { toast } = useToast(); // toast for errors

  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<[] | any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!prompt.trim()) return toast({
      title: "Ой, что-то пошло не так!",
      description: "Пожалуйста, введите запрос :)",
      variant: "error",
    });

    try {
      setLoading(true);

      const response = await axios.post("/api/chat", {
        prompt,
      });

      setMessages([...messages, { prompt, response: response.data.content }]);
      setPrompt("");
      setLoading(false);
    } catch (e: any) {
      setPrompt("");
      toast({
        title: "Ой, что-то пошло не так!",
        description: e.response.data,
        variant: "error",
      });
      setLoading(false);
    }
  };

  const onSubmit = () => {
    if (!prompt.trim()) {
      return toast({
        title: "Ой, что-то пошло не так!",
        description: "Пожалуйста, введите запрос :)",
        variant: "error",
      });
    };
    sendMessage();
  };

  return (
    <ScrollArea className="border-slate-100 px-6 dark:border-slate-800 border my-16 w-full rounded-xl max-h-[80vh]">
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence>
          {messages.length > 0 ? (
            <div className="my-8 gap-y-6 flex flex-col">
              {messages.map((message, i) => (
                <ChatMessage
                  key={i}
                  prompt={message.prompt}
                  response={message.response}
                />
              ))}
            </div>
          ) : (
            <Empty label="Пока что здесь пусто... задайте свой первый вопрос?" />
          )}
        </AnimatePresence>
        <div className="flex mt-auto mb-6 w-full">
          <Input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            placeholder="Введите свой запрос!"
            className="mr-3 ml-4"
            disabled={loading}
          />
          <Button className="mr-4" disabled={loading} onClick={onSubmit} variant="outline">
            {!loading ? (
              <Send />
            ) : (
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-secondary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
