import { filterCommands } from "../utils/chat/helpers"

interface CommandsListProps {
  query: string;
  onClick: (user: string, context: 'user' | 'command') => void;
}

export default function CommandsList({ query, onClick }: CommandsListProps) {
  const filteredCommands = filterCommands(query);

  const commandElements = filteredCommands.map(cmd => (
    <div className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer" onClick={() => onClick(cmd.name, 'command')}>
      <p className="text-xs">{cmd.name} [{cmd.type}]</p>
      <p className="text-xs text-twitchGray-200">{cmd.description}</p>
    </div>
  ))

  return (
    <div className="flex flex-col max-h-48 overflow-y-scroll">

      {commandElements.length ? (
        commandElements
      ) : (
        <div className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer">
          <p className="text-xs">No commands found.</p>
        </div>
      )
      }
    </div>
  )
}