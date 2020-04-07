import {ID} from '@datorama/akita';

export interface User {
  id: ID;
  email: string;
  role: string[];
  username: string;
}

export function createUser(params: Partial<User>) {
  return {
    id: params?.id,
    email: params?.email,
    role: params?.role ?? [],
    username: params?.username
  } as User;
}
