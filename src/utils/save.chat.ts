import AsyncStorage from "@react-native-async-storage/async-storage"
import { getChat } from "./get.chat"
import { Message } from "./interfaces"

export const saveChat = async (message: Message, contact_id: string) => {
    try {
        const chat = await getChat(contact_id)

        chat.push(message)

        const jsonChat = JSON.stringify(chat)
        await AsyncStorage.setItem(`@chat-${contact_id}`, jsonChat)

        return true
    } catch (e) {
        return false
    }
}
  