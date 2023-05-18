import express from 'express'
import DB from './connection.js'
import process from './configEnv.js'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const app = new express()
const PORT = process.PORT || '5000'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fakeData = fs.readFileSync(path.join(__dirname, 'data.json')).toString()
const directory = path.join(__dirname, '../frontend/index.html')

app.use(cors())
app.use(express.static("../frontend/"))

app.get('/', (req, res)=>{
  res.sendFile(directory)
})

app.get('/backend/api', async (req, res)=>{
  // res.send(fakeData)

  const [data] = await DB.getOrders().then(result => result)
  res.send(data)
})

app.listen(PORT, ()=>{
  console.log('running server ' + PORT)
})