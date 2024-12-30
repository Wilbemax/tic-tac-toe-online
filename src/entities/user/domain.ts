import { UserId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  name: string;
  login: string;
  rating: number;
  passwordHash: string;
  salt: string;
};

export type SessionEntity = {
  id: UserId;
  name: string;
  login: string;
  expireAt: string;
};

export const DEFAULT_RATING = 1000;

export const userToSession = (user: UserEntity, expireAt: string) => {
  return {
    id: user.id,
    name: user.name,
    login: user.login,
    expireAt,
  };
};
