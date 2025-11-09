// import z from "zod"

export type User = {
  id: number
  username: string
  name: string
  email: string
  password: string
}

export type ResponseLogin = {
  token: string
}