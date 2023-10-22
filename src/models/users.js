"use strict"


const {mongoose} = require('../configs/dbConnection')

//? user modele gelecek olan parola bilgisinin otomatik olarak crypto işlemine girmesi için passwordEncrypt fonksiyonu çağırılı

const passwordEncrypt = require('../helpers/passwordEncrypt')


//? USER MODEL

const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        unique:false,
        required:true,
        //?girilen parolayı şifreleme yap
        set:(password)=>passwordEncrypt(password)
    },
    email:{
        type:String,
        required:[true,'Email field must be riquired'],
        unique:[true,'Email field must be unique'],
        validate:[
            (email)=>email.includes('@') && email.includes('.'),'Email type is incorrect'
        ]
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isStaf:{
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

},{
    timestamps:true,
    // field ismi
    collection:'users'
})


//? module export yapılırken Model ismi ve modele çevrilecek olan schema ismi belirleniyor
//? model ismi aynı zamanda kontroller tarafında kullanılacak
module.exports = mongoose.model('User',UserSchema)

