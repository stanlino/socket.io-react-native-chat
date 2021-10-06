import AsyncStorage from "@react-native-async-storage/async-storage"

interface Contact {
    contact_name: string,
    contact_id: string
}

const saveContact = async (contact: Contact) => {
    try {
        const jsonContactsGet = await AsyncStorage.getItem('@contacts')
        const contacts = jsonContactsGet != null ? JSON.parse(jsonContactsGet) : []

        contacts.push(contact)

        const jsonContactsSave = JSON.stringify(contacts)
        await AsyncStorage.setItem('@contacts', jsonContactsSave)

        return contacts

      } catch (e) {
        // saving error
      }
    
}

export default saveContact