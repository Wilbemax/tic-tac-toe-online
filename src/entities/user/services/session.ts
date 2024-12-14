import { left, right } from "@/shared/lib/either";
import { SessionEntity, UserEntity, userToSession } from "../domain";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const secretKey = process.env.SESSION_SECRET;
const encodedSecret = new TextEncoder().encode(secretKey);

async function encrypt(payload: SessionEntity) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("14d")
    .sign(encodedSecret);
}

async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedSecret, {
      algorithms: ["HS256"],
    });
    return right(payload as SessionEntity);
  } catch (error) {
    return left(error);
  }
}

async function addSession(user: UserEntity) {
  const expireAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const sessionData = userToSession(user, expireAt.toISOString());
  const session = await encrypt(sessionData);
  const cookiesStore = await cookies();

  cookiesStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expireAt,
    sameSite: "lax",
    path: "/",
  });
}

async function deleteSession() {
  const cookiesStore = await cookies();
  cookiesStore.delete("session");
}

async function verifySession() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (session.type === "left") {
    redirect("/login");
  }

  return { isAuth: true, session: session.value };
}

export const sessionService = { deleteSession, addSession, verifySession };
