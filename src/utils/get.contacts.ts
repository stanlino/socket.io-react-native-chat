import AsyncStorage from "@react-native-async-storage/async-storage"

const getContacts = async () => {
    try {
        const jsonContacts = await AsyncStorage.getItem('@contacts')
        return jsonContacts != null ? JSON.parse(jsonContacts) : [];
    } catch (e) {
        return []
    }
    
}

export default getContacts