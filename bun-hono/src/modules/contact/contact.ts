type Contact = {
  id: number
  userId: number
  name: string
  email: string
  phone: string
}

export interface CreateContact {
  name: string
  email: string
  phone: string
  userId: number
}


export default Contact;