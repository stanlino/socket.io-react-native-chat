import AsyncStorage from "@react-native-async-storage/async-storage"
import getContacts from "./get.contacts"

interface Contact {
    contact_name: string,
    contact_id: string
}

const deleteContact = async (contact: Contact) => {
    try {
        const contacts = await getContacts()

        const newContacts = contacts.filter(item => item.contact_id != contact.contact_id)

        const jsonContactsSave = JSON.stringify(newContacts)
        await AsyncStorage.setItem('@contacts', jsonContactsSave)


        return newContacts

      } catch (e) {
        return []
      }
    
}

export default deleteContact