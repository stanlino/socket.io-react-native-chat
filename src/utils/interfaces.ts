export interface Contact {
    contact_name: string
    contact_id: string
}
  
export interface AddContactModalProps {
    addContact(data: Contact): void
}

export interface Message {
    to: string,
    from: string,
    message: string
}