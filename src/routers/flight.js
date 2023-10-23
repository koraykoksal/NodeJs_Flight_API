"use strict"


const flight=require('../controllers/flight')
const router=require('express').Router()

const {isAdmin} = require('../middlewares/permission')

router.route('/')
    .get(flight.list)
    .post(isAdmin,flight.create)

router.route('/:id')
    .get(flight.read)
    .put(isAdmin,flight.update)
    .patch(isAdmin,flight.update)
    .delete(isAdmin,flight.delete)


module.exports=router


