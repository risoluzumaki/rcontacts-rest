export default class HashUtils {
  static async hashedPassword(password: string){
    const hashedPassword = await Bun.password.hash(password,{
      algorithm: "bcrypt",
      cost: 10
    });
    return hashedPassword
  }

  static async verifyPassword(hashedPassword: string, password: string){
    return await Bun.password.verify(password, hashedPassword)
  }
}