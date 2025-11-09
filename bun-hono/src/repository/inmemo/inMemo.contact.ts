import ContactRepository from "../../modules/contact/contact.respository";
import Contact from "../../modules/contact/contact";

class InMemoryContactRepository implements ContactRepository {
  contacts: Contact[]

  constructor() {
    this.contacts = []
  }

  async create(contact: Contact): Promise<void> {
    this.contacts.push(contact)
  }

  async findByID(id: number): Promise<Contact | undefined> {
    return this.contacts.find(contact => contact.id === id)
  }

  async findAll(userId: number): Promise<Contact[] | undefined> {
    const userContacts = this.contacts.filter(contact => contact.userId === userId);
    return userContacts.length > 0 ? userContacts : undefined;
  }

  async update(contact: Contact): Promise<void> {
    const index = this.contacts.findIndex(c => c.id === contact.id)
    if (index !== -1) {
      this.contacts[index] = contact
    }
  }

  async delete(id: number): Promise<void> {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }
}

export default InMemoryContactRepository;