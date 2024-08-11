import { Message } from "@/app/utils/chat/types";
import MessageComponent from "./MessageComponent";
import { useEffect, useRef, useState } from "react";
import ChatPaused from "./ChatPaused";

interface MessagesProps {
  messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(false);
  const messageElements = messages.map(message => <MessageComponent message={message} key={message.id} />)
  const containerRef = useRef(null) as any;

  const checkIfScrolledToBottom = () => {
    const container = containerRef.current;
    if (container) {
      setIsScrolledToBottom(container.scrollHeight - container.scrollTop - container.clientHeight < 1);
    }
  };


  useEffect(() => {
    // Scroll to the bottom whenever the messages array changes
    if (containerRef.current && isScrolledToBottom) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
}, [messages]);


useEffect(() => {
  // Listens to scroll event on the container to keep state up to date
  const container = containerRef.current;
  if (container) {
    container.addEventListener('scroll', checkIfScrolledToBottom);
    return () => container.removeEventListener('scroll', checkIfScrolledToBottom);
  }
}, []);


  return (
    <div className="overflow-y-scroll flex flex-col gap-1.5 relative" ref={containerRef}>
      {!isScrolledToBottom ? <ChatPaused /> : null}
      {messageElements}
    </div>
  )
}