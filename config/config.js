import 'dotenv/config'

const SERVER_PORT=process.env.SERVER_PORT
const DATABASE_NAME=process.env.DATABASE_NAME
const PORT=process.env.PORT
const SECRET=process.env.SECRET
const DIALECT=process.env.DIALECT
const HOST=process.env.HOST

export {SERVER_PORT, DATABASE_NAME, PORT, SECRET, DIALECT, HOST}