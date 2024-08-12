"use client"

import { FaRegStar } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import IconButton from "./IconButton";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import Popover from "./Popover";
import UserList from "./UserList";
import { filterUsers, isUserQuery } from "../utils/chat/helpers";

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  users: string[];
}

export default function Input({ value, onChange, onSubmit, users }: InputProps) {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [popoverComponent, setPopoverComponent] = useState<'users' | 'commands' | null>(null);
  const [targetUsers, setTargetUsers] = useState<string[]>(users);

  useEffect(() => {
    if (isUserQuery(value)) {
      const queryString = value.slice(value.indexOf('@') + 1);
      console.log(queryString)
      const filteredUsers = filterUsers(users, queryString);
      setTargetUsers(filteredUsers);
      setPopoverVisible(true);
      setPopoverComponent('users');
    } else {
      setPopoverVisible(false);
      setPopoverComponent(null);
      setTargetUsers(users);
    }
  }, [value])

  const handleSelectUser = (user: string) => {
    console.log("HIT")
    const atIndex = value.indexOf('@');
    const pre = value.slice(0, atIndex);
    onChange(`${pre}@${user} `)
    setPopoverVisible(false)
  }

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
      <Popover isVisible={popoverVisible}>
        {popoverComponent === 'users' ? (
          <UserList 
          users={targetUsers} 
          onClick={handleSelectUser}
          />
        ) : (
          <h1>test</h1>
        )}
      </Popover>

      {/* Pseudo Element for hover */}
      <div className="absolute inset-0 border-twitchGray-200 rounded pointer-events-none group-hover:border-2" />

      <IconButton
        icon={<FaRegStar />}
        tooltipText="Identity"
      />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <input
          className="bg-transparent w-full text-sm"
          value={value}
          onChange={handleChange}
          placeholder="Send a Message"
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