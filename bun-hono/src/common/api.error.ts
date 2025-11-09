import { StatusCode } from "hono/utils/http-status"

export default class AppError extends Error{
  public statusCode: StatusCode 
  public message: string
  constructor(statusCode: StatusCode, message: string){
    super()
    this.statusCode = statusCode
    this.message = message
  }
}