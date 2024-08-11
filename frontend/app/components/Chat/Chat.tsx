"use client"

import { GoGear } from "react-icons/go";
import { LuGem } from "react-icons/lu";

import IconButton from "../IconButton";
import Button from "../Button";
import BonusButton from "../BonusButton";
import Input from "../Input";

export default function Chat() {
  return (
    <aside className="bg-twitchGray-400 w-[340px] h-full flex flex-col gap-2 items-center justify-center border-l border-l-twitchGray-250 p-2.5">
      {/* <p>Chat</p> */}
      <Input />
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
          <IconButton
           icon={<LuGem color="#BF93FF"/>}
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
          <Button>
            Chat
          </Button>
        </div>
      </div>
    </aside>
  )
}