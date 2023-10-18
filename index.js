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




//* MIDDLEWARE




//* ROUTES










// run server
app.listen(process.env.PORT ?? 8000,()=>console.log(`Listenin is ${process.env.PORT} port.`))