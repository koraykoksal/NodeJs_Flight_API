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
//? modeleList & modeleDetailList
app.use(require('./src/middlewares/findSearchSortPage'))



//* ROUTES

app.all('/',(req,res)=>{

    res.send({
        error:false,
        message:'Welcome to API Services',
        isLogin:req.isLogin,
        user:req.user
    })

})



app.use('/users',require('./src/routers/user'))
app.use('/passenger',require('./src/routers/passanger'))
app.use('/flight',require('./src/routers/flight'))
app.use('/reservation',require('./src/routers/reservation'))
app.use('/auth',require('./src/routers/auth'))


// ERROR HANDLER
app.use(require('./src/middlewares/errorHandler'))


// run server
app.listen(process.env.PORT ?? 8000,()=>console.log(`Listenin is ${process.env.PORT} port.`))
