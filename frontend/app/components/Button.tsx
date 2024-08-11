interface ButtonProps {
  children: string | React.ReactElement;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps){
  return (
    <button className="bg-twitchPrimary-100 rounded px-2 py-1 text-xs font-semibold hover:bg-twitchPrimary-200" onClick={onClick}>
      { children }
    </button>
  )
}