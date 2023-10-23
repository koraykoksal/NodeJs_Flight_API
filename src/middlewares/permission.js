"use strict"




module.exports={

    isLogin:(req,res,next)=>{

        //? .env dosyasınında NODE_ENV == "development" olarak yazılmış ise bir sonraki satırda yazan kodları çalıştırmaz
        // if(process.env.NODE_ENV == "development") return next()

        if(req.user){
            next()
        }
        else{
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }

    },

}