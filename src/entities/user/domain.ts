import { UserId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  login: string;
  rating: number;
  passwordHash: string;
  salt: string;
};

export type SessionEntity = {
  id: UserId;
  login: string;
  expireAt: string;
};

export const DEFAULT_RATING = 1000;

export const userToSession = (user: UserEntity, expireAt: string) => {
  return {
    id: user.id,
    login: user.login,
    expireAt,
  };
};
