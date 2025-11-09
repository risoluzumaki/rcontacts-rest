// import { Hono } from 'hono'
import bootstrapp from './bootstrapp/bootstrapp'

const app = bootstrapp()

const port = process.env.PORT || 3000;

export default {
  port,
  fetch: app.fetch
}