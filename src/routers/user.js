"use strict"


// route işlemleri için router dahil edilir
const router = require('express').Router()

const {isLogin} = require('../middlewares/permission')

// route işlemlerinin çalışması için user controller dahil edilir.
const user = require('../controllers/user')

//? URL : /users

router.route('/')
.post(isLogin,user.list)
// .post(user.create)


router.route('/:id')
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.delete)



module.exports=router









