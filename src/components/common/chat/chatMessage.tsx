import { motion } from "framer-motion";

export default function ChatMessage({
  prompt,
  response,
}: {
  prompt: string;
  response: string;
}) {
  return (
    <motion.div
      initial={{
        x: 100,
        y: 100,
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{ opacity: 0 }}
      className="w-full px-4 md:px-6 gap-y-4 flex items-center justify-start flex-col text-left"
    >
      <div className="flex items-start w-full p-4">
        <div className="md:w-7 md:h-7 w-5 h-5 rounded-[50%] bg-gradient-to-r from-orange-500 to-orange-300 " />
        <p className="text-xs sm:text-sm ml-2 flex-wrap w-[90%]">{prompt}</p>
      </div>
      <div className="flex items-start w-full rounded-lg bg-secondary p-4">
        <div className="md:w-7 md:h-7 w-5 h-5 rounded-[50%] bg-gradient-to-r from-emerald-500 to-sky-500" />
        <p className="text-xs  sm:text-sm ml-2 flex-wrap w-[90%]">{response}</p>
      </div>
    </motion.div>
  );
}
