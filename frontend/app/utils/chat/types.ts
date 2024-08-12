export interface Message {
  id: number;
  username: string;
  message: string;
  color: 'purple' | 'blue' | 'red';
}

export interface Command {
  name: string,
  type: string,
  description: string
}