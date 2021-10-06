import { Message } from "./interfaces";
import { saveChat } from "./save.chat";

export const sendAndSaveMessage = async (message: Message, contact_id: string) => {
    try {
        await saveChat(message, contact_id)
        return true
    } catch (e) {
        return false
    }
}