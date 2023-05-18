import sql from 'mssql'
import process from './configEnv.js'

const config = {
  user: process.USER,
  password: process.PASSWORD,
  server: process.SERVER,
  database: process.DATABASE,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAort: true,
    instancename: process.HOST
  },
  port: 1433
}

async function getOrders(){
  try {
    let pool = await sql.connect(config)
    let table = await pool.request().query('SELECT * FROM Pessoas')
    return table.recordsets
  } catch (error) {
    console.log(error)
  }
}

export default {
  getOrders
}