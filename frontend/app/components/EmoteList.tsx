import { filterEmotes } from "../utils/chat/helpers";
import CustomEmote from "./CustomEmote";

interface EmoteListProps {
  query: string;
  onClick: (name: string, context: 'user' | 'command' | 'emote') => void;
}

export default function EmoteList({ query, onClick }: EmoteListProps) {
  const filteredEmotes = filterEmotes(query);

  const emoteElements = filteredEmotes.map(emote => (
    <div key={emote.name} className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer flex items-center gap-2" onClick={() => onClick(emote.name, 'emote')}>
      <CustomEmote emote={emote} />
      <p className="text-xs">{emote.name}</p>
    </div>
  ))

  return (
    <div className="flex flex-col max-h-48 overflow-y-scroll">
      {emoteElements.length ? (
        emoteElements
      ) : (
        <div className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer">
          <p className="text-xs">No emotes found.</p>
        </div>
      )}
    </div>

  )
}