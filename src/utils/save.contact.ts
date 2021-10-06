import AsyncStorage from "@react-native-async-storage/async-storage"
import getContacts from "./get.contacts"

interface Contact {
    contact_name: string,
    contact_id: string
}

const saveContact = async (contact: Contact) => {
    try {
        const contacts = await getContacts()

        contacts.push(contact)

        const jsonContactsSave = JSON.stringify(contacts)
        await AsyncStorage.setItem('@contacts', jsonContactsSave)

        return contacts

      } catch (e) {
        // saving error
      }
    
}

export default saveContact