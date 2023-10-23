"use strict"



// route işlemleri için router dahil edilir
const router = require('express').Router()

const passanger = require('../controllers/passenger')

const permission = require('../middlewares/permission')

//? URL : /passanger

// router.use(permission.isStafforAdmin)

router.route('/')
.get(passanger.list)
.post(permission.isAdmin,passanger.create)


router.route('/:id')
.get(passanger.read)
.put(permission.isAdmin,passanger.update)
.patch(permission.isAdmin,passanger.update)
.delete(permission.isAdmin,passanger.delete)



module.exports=router


