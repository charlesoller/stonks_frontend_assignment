import { Message } from "@/app/utils/chat/types";

interface MessageComponentProps {
  message: Message;
}

export default function MessageComponent({ message }: MessageComponentProps) {
  const { username, color, message: content, id } = message;

  return (
    <div key={id}>
      <p className='text-xs'>
        <span className={`font-semibold text-twitchText-${color}`}>{username}: </span>
        {content}
      </p>
    </div>
  )
}