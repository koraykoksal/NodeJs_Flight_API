"use strict"



// HATA YAKALAMA MIDDLEWARE
//? hata yakalama erorHandler middleware 4 parametreden oluşur
module.exports=(err,req,res,next)=>{

    return res.status(res?.errorStatusCode || 500).send({
        error:true,
        message:err.message,
        cause:err.cause,
        //? hatayı oluşturan datanın body alanında görünmesi için req.body bilgisi geri gönderilir
        body:req.body
    })

}


