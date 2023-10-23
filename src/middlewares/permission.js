"use strict"




module.exports={

    isLogin:(req,res,next)=>{

        //? .env dosyasınında NODE_ENV == "development" olarak yazılmış ise bir sonraki satırda yazan kodları çalıştırmaz
        //if(process.env.NODE_ENV == "development") return next()

        if(req.user){
            next()
        }
        else{
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }

    },
    isAdmin:(req,res,next)=>{

        //? .env dosyasınında NODE_ENV == "development" olarak yazılmış ise bir sonraki satırda yazan kodları çalıştırmaz
        //if(process.env.NODE_ENV == 'development') return next()

        if(req.user && req.user.isAdmin){
            next()
        }
        else{
            res.errorStatusCode=403
            throw new Error('NoPermission: You must login and to be Admin.')
        }


    },
    isStafforAdmin:(req,res,next)=>{

        //? .env dosyasınında NODE_ENV == "development" olarak yazılmış ise bir sonraki satırda yazan kodları çalıştırmaz
        // if(process.env.NODE_ENV == 'development') return next()

        if(req.user && (req.user.isAdmin && req.user.isStaff)){
            next()
        }
        else{
            res.errorStatusCode=403
            throw new Error('NoPermission: You must login and to be Admin.')
        }
    }

}