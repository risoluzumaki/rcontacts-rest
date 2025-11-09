import UserRepository from "../../modules/user/user.respository";
import { User } from "../../modules/user/user";

class InMemoryUserRepository implements UserRepository{
  users: User[]

  constructor() {
    this.users = []
  }

  async create(user: any): Promise<void> {
    this.users.push(user)
  }

  async findByID(id: number): Promise<any | undefined> {
    return this.users.find(user => user.id === id)
  }

  async findByEmail(email: String): Promise<any | undefined> {
    return this.users.find(user => user.email === email)
  }
}

export default InMemoryUserRepository;