import { Message } from "@/app/utils/chat/types";
import MessageComponent from "./MessageComponent";
import { useEffect, useRef } from "react";

interface MessagesProps {
  messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
  const messageElements = messages.map(message => <MessageComponent message={message} key={message.id} />)
  const containerRef = useRef(null) as any;

  useEffect(() => {
    // Scroll to the bottom whenever the messages array changes
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
}, [messages]);

  return (
    <div className="overflow-y-scroll flex flex-col gap-1.5" ref={containerRef}>
      {messageElements}
    </div>
  )
}