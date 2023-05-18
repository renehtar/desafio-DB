import * as dotenv from 'dotenv'
dotenv.config()

export default {
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  SERVER: process.env.SERVER,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
}