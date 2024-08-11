"use client"

import { FaRegStar } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import IconButton from "./IconButton";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
}

export default function Input({ value, onChange, onSubmit}: InputProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    onChange('');
  }

  return (
    <div className="relative flex w-full gap-1 p-1 border border-twitchGray-200 rounded transition-all group">
      {/* Use a pseudo-element for hover effect */}
      <div className="absolute inset-0 border-twitchGray-200 rounded pointer-events-none group-hover:border-2" />

      {/* Content */}
      <IconButton
        icon={<FaRegStar />}
        tooltipText="Identity"
      />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <input 
          className="bg-transparent w-full text-sm" 
          value={value}
          onChange={handleChange}
        />
      </form>
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