import { Message } from "@/app/utils/chat/types";
import MessageComponent from "./MessageComponent";

interface MessagesProps {
  messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
  const messageElements = messages.map(message => <MessageComponent message={message} key={message.id} />)

  return (
    <div className="overflow-y-scroll flex flex-col gap-1.5">
      {messageElements}
    </div>
  )
}