import AsyncStorage from "@react-native-async-storage/async-storage";
import { Message } from "./interfaces";

export const getChat = async (contact_id: string): Promise<Message[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@chat-${contact_id}`)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
        return [] as Array<Message>
    }
}
  