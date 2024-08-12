export const filterUsers = (users: string[], queryString: string) => {
  if (!queryString.length) return users;
  return users.filter(user => user.toLowerCase().startsWith(queryString.toLowerCase()));
}

export const isAlphanumeric = (str: string) => {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(str);
}

export const isUserQuery = (value: string) => {
  if (value.includes('@') && isAlphanumeric(value.charAt(value.length - 1))) {
    const split = value.split(' ');
    if (!split[split.length - 1].includes('@')) {
      return false;
    }
    return true;
  }
  return false;
}
