import { Pool } from "pg";

const poolPg = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT as unknown as number,
})

poolPg.connect()
  .then(() => {
    console.log("Connected to Postgres")
  })
  .catch((err) => {
    console.log("Error connecting to Postgres", err)
  })

export default poolPg;