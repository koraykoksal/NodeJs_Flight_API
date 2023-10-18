"use strict"


const mongoose =  require('mongoose')

//? db connection için fonksiyon oluşturulur.

const dbConnection=function(){

    mongoose.connect(process.env.MONGODB)
    .then(()=>console.log('* DB Connected *'))
    .catch((err)=>console.log('* DB Connection Error',err))
}

//? exports
module.exports = {
    mongoose,
    dbConnection
} 

