import { IoMdPause } from "react-icons/io";

export default function ChatPaused() {
  return (
    <div className="fixed bottom-24 right-20 background-red-500 font-semibold text-sm flex gap-2 items-center bg-black/80 py-1 px-2 rounded">
      <IoMdPause />
      <p>Chat paused due to scroll</p>
    </div>
  )
}