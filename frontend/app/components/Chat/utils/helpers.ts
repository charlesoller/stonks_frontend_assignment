import { Message } from "@/app/utils/chat/types";

// Filters the messages for unique usernames
export const getCurrentUsers = (messages: Message[]) => Array.from(
  new Set(messages
    .map(message => message.username)
  )
);