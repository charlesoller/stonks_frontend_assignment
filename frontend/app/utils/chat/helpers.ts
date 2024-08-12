import { COMMANDS } from "./constants";

export const filterUsers = (users: string[], queryString: string) => {
  if (!queryString.length) return users;
  return users.filter(user => 
    user.toLowerCase().startsWith(queryString.toLowerCase())
    || user.toLowerCase().includes(queryString.toLowerCase())
  );
}

export const filterCommands = (query: string) => {
  if (!query.length) return COMMANDS;
  return COMMANDS.filter(cmd => 
    cmd.name.toLowerCase().startsWith(query.toLowerCase())
    || cmd.name.toLowerCase().includes(query.toLowerCase())
  )
}

export const isAlphanumeric = (str: string) => {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(str);
}

export const isUserQuery = (value: string) => {
  if (value.includes('@')) {
    const split = value.split(' ');
    if (!split[split.length - 1].includes('@')) {
      return false;
    }
    return true;
  }
  return false;
}

export const isCommandQuery = (value: string) => {
  if (value.includes('/')) {
    const split = value.split(' ');
    if (!split[split.length - 1].includes('/')) {
      return false;
    }
    return true;
  }
  return false;
}

