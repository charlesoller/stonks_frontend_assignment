"use client"

import { FaRegStar } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import IconButton from "./IconButton";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import Popover from "./Popover";
import UserList from "./UserList";
import { filterUsers, getQuerySymbol, isCommandQuery, isEmoteQuery, isUserQuery } from "../utils/chat/helpers";
import CommandsList from "./CommandsList";
import EmoteList from "./EmoteList";

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  users: string[];
}

export default function Input({ value, onChange, onSubmit, users }: InputProps) {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [popoverComponent, setPopoverComponent] = useState<'users' | 'commands' | 'emotes' | null>(null);
  const [targetUsers, setTargetUsers] = useState<string[]>(users);
  const [commandQuery, setCommandQuery] = useState<string>('');
  const [emoteQuery, setEmoteQuery] = useState<string>('');
  const inputElementRef = useRef(null) as any;

  useEffect(() => {
    if (isUserQuery(value)) {
      const queryString = value.slice(value.indexOf('@') + 1);
      const filteredUsers = filterUsers(users, queryString);
      setTargetUsers(filteredUsers);
      setPopoverVisible(true);
      setPopoverComponent('users');
    } else if (isCommandQuery(value)) {
      const queryString = value.slice(value.indexOf('/') + 1);
      setCommandQuery(queryString);
      setPopoverVisible(true);
      setPopoverComponent('commands');
    } else if (isEmoteQuery(value)) {
      const queryString = value.slice(value.indexOf(':') + 1);
      setEmoteQuery(queryString);
      setPopoverVisible(true);
      setPopoverComponent('emotes');
    } else {
      setPopoverVisible(false);
      setPopoverComponent(null);
      setTargetUsers(users);
    }
  }, [value])

  const handleSelectOption = (option: string, context: 'user' | 'command' | 'emote') => {
    const splitChar = getQuerySymbol(context);
    const atIndex = value.indexOf(splitChar);
    const pre = value.slice(0, atIndex);
    onChange(`${pre}${splitChar}${option} `)
    setPopoverVisible(false);
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    onChange('');
  }

  const renderPopoverElement = () => {
    if (popoverComponent === 'commands') return (
      <CommandsList
        query={commandQuery}
        onClick={handleSelectOption}
      />
    )
    if (popoverComponent === 'emotes') return (
      <EmoteList
        query={emoteQuery}
        onClick={handleSelectOption}
      />
    )
    return (
      <UserList
        users={targetUsers}
        onClick={handleSelectOption}
      />
    )
  }

  return (
    <div className="relative flex w-full gap-1 p-1 border border-twitchGray-200 rounded transition-all group">
      <Popover isVisible={popoverVisible}>
        {renderPopoverElement() || null}
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
          ref={inputElementRef}
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