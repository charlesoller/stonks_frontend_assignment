import { EXTRA_MESSAGES } from "@/app/utils/chat/constants";
import { Message } from "@/app/utils/chat/types";

// Filters the messages for unique usernames
export const getCurrentUsers = (messages: Message[]) => Array.from(
  new Set(messages
    .map(message => message.username)
  )
);

// Gets a random message that will be added to chat, uses the preexisting messages to not overlap any IDs
export const getNewMessage = (messages: Message[]) => {
  const existingIds = messages.map(message => message.id);
  // Using a manual for loop here just to limit the number of times this could possibly run
  for (let i = 0; i < 200; i++) {
    const randomIndex = Math.floor(Math.random() * EXTRA_MESSAGES.length)
    if (!existingIds.includes(EXTRA_MESSAGES[randomIndex].id)) {
      return EXTRA_MESSAGES[randomIndex];
    }
  }
  return;
}