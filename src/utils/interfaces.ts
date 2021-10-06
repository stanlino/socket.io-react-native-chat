export interface Contact {
    contact_name: string
    contact_id: string
}
  
export interface AddContactModalProps {
    addContact(data: Contact): void
}