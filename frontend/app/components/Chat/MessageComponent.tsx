import { Message } from "@/app/utils/chat/types";
import { parseMessage } from "./utils/helpers";

interface MessageComponentProps {
  message: Message;
}

export default function MessageComponent({ message }: MessageComponentProps) {
  const { username, color, message: content, id } = message;

  return (
    <div key={id}>
      <p className='text-xs'>
        <span className={`font-semibold text-twitchText-${color}`}>{username}: </span>
        {parseMessage(content)}
      </p>
    </div>
  )
}