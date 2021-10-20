import AsyncStorage from "@react-native-async-storage/async-storage"
import { Contact } from "./interfaces";

const getContacts = async (): Promise<Array<Contact>> => {
    try {
        const jsonContacts = await AsyncStorage.getItem('@contacts')
        return jsonContacts != null ? JSON.parse(jsonContacts) : [];
    } catch (e) {
        return []
    }
    
}

export default getContacts