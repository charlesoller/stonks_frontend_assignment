"use client"

import { GoGear } from "react-icons/go";
import { LuGem } from "react-icons/lu";

import IconButton from "../IconButton";
import Button from "../Button";
import BonusButton from "../BonusButton";
import Input from "../Input";
import Messages from "./Messages";
import { useEffect, useRef, useState } from "react";
import { Message } from "@/app/utils/chat/types";
import { DEFAULT_MESSAGES } from "@/app/utils/chat/constants";
import { getCurrentUsers } from "./utils/helpers";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGES);
  const [currentUsers, setCurrentUsers] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setCurrentUsers(getCurrentUsers(messages))
  }, [messages])

  const handleChatSubmit = (message: string) => {
    setMessages(prev => [...prev, {
      id: messages.length + 1,
      username: "Demo User",
      color: "blue",
      message
    }])
  }

  return (
    <aside className="bg-twitchGray-400 w-[340px] flex flex-col gap-2 items-center justify-center border-l border-l-twitchGray-250 p-2.5 overflow-clip">
      {/* <p>Chat</p> */}
      <Messages messages={messages} />
      <Input
        value={input}
        onChange={(val: string) => setInput(val)}
        onSubmit={handleChatSubmit}
      />
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
          <IconButton
            icon={<LuGem color="#BF93FF" />}
            tooltipText="Bits"
          >
            0
          </IconButton>
          <BonusButton />
        </div>
        <div className="flex items-center gap-1">
          <IconButton
            icon={<GoGear />}
            tooltipText="Settings"
          />
          <Button
            onClick={() => handleChatSubmit(input)}
          >
            Chat
          </Button>
        </div>
      </div>
    </aside>
  )
}