"use client"

import { FaRegStar } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import IconButton from "./IconButton";
import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState<string>('');

  return (
    <div className="relative flex w-full gap-1 p-1 border border-twitchGray-200 rounded transition-all group">
      {/* Use a pseudo-element for hover effect */}
      <div className="absolute inset-0 border-twitchGray-200 rounded pointer-events-none group-hover:border-2" />

      {/* Content */}
      <IconButton
        icon={<FaRegStar />}
        tooltipText="Identity"
      />
      <input className="bg-transparent w-4/5" />
      <div className="flex gap-1">
        <IconButton
          icon={<LuPartyPopper />}
          tooltipText="Cheer"
        />
        <IconButton
          icon={<HiOutlineEmojiHappy />}
        />
      </div>
    </div>
  );
}