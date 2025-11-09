import { User } from "./user";

export default interface UserRepository {
  create(username: string, name: string, email: string, password: string) : Promise<void>
  findByID(id : number) : Promise<User | undefined> 
  findByEmail(email : String) : Promise<User | undefined>
}