import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";
import { passwordService } from "./password";
import cuid from "cuid";
import { DEFAULT_RATING } from "../domain";

const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const userWithLogin = await userRepository.getUser({ login: email });

  if (userWithLogin) {
    return left("user-already-exist" as const);
  }

  const { hash, salt } = await passwordService.hashPassword(password);

  const user = await userRepository.saveUser({
    id: cuid(),
    login: email,
    rating: DEFAULT_RATING,
    passwordHash: hash,
    salt,
  });

  return right(user);
};

export const userService = { createUser };
