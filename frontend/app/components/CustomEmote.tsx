import { Emote } from "../utils/chat/types"

interface CustomEmoteProps {
  emote: Emote;
}

export default function CustomEmote({ emote }: CustomEmoteProps){
  return (
    <img
    className="max-h-4 max-w-4 inline"
     src={emote.url}
     alt={emote.name}
    />
  )
}