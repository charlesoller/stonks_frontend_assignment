interface ButtonProps {
  children: string | React.ReactElement;
}

export default function Button({ children }: ButtonProps){
  return (
    <button className="bg-twitchPrimary-100 rounded px-2 py-1 text-xs font-semibold hover:bg-twitchPrimary-200">
      { children }
    </button>
  )
}