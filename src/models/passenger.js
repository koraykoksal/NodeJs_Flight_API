"use strict"


const {mongoose} = require('../configs/dbConnection')


const PassengerSchema=new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        enum:[null,"M","F"],
        default:null,
    },
    email:{
        type:String,
        required:[true,"Email field must be reqiured"],
        unique:[true,"There is this email. Email field must be unique.'"],
        trim:true,
        validate:[
            (email)=>{
                const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailCheck.test(email)

            },"Email is incorrect"
        ]

    },
    createdId:{
        type:mongoose.Schema.Types.ObjectId,
        red:"User",
        required:true
    }



},{ collection: 'passengers', timestamps: true })

module.exports=mongoose.model('Passenger',PassengerSchema)







