

interface UserListProps {
  users: string[];
  onClick: (user: string, context: 'user' | 'command') => void;
}

export default function UserList({ users, onClick }: UserListProps) {
  const userElements = users.map(user => (
    <div className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer" onClick={() => onClick(user, 'user')}>
      <p className="text-xs">{user}</p>
    </div>
  ))

  return (
    <div className="flex flex-col max-h-48 overflow-y-scroll">

      {userElements.length ? (
        userElements
      ) : (
        <div className="hover:bg-twitchGray-250 rounded p-2 cursor-pointer">
          <p className="text-xs">No users found.</p>
        </div>
      )
      }
    </div>
  )
}