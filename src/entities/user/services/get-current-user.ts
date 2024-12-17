import { userRepository } from "../repositories/user"
import { sessionService } from "./session"

export const getCurrentUser = async() => {
    const {session} = await sessionService.verifySession()
    const user = await userRepository.getUser({id: session.id})
    return user
}