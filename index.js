"use strict"

const express = require('express')
const app = express()


// env variables
require('dotenv').config()

// async Errors to errorHandler
require('express-async-errors')

// Accespt JSON
app.use(express.json())


//* CONNECT DATABASE

const {dbConnection}=require('./src/configs/dbConnection')
dbConnection()




//* MIDDLEWARE




//* ROUTES







// ERROR HANDLER
app.use(require('./src/middlewares/errorHandler'))


// run server
app.listen(process.env.PORT ?? 8000,()=>console.log(`Listenin is ${process.env.PORT} port.`))
