import {sign , verify } from "hono/jwt"

type Payload = {
  id: number
  email: string
  exp?: number
}

export default class JwtUtils {

  private static secret = process.env.JWT_SECRET as string
  
  static async generateToken(id: number, email: string){
    const payload : Payload = {id, email, exp: Math.floor(Date.now() / 1000) + (60 * 60)}
    const token = await sign(payload, JwtUtils.secret)
    return token
  }

  static async verifyToken(token: string){
    const payload = await verify(token, JwtUtils.secret)
    if (!payload) {
      return false
    }
    return payload as Payload
  }
  
}