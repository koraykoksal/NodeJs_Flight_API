"use strict"


const flight=require('../controllers/flight')
const router=require('express').Router()

router.route('/')
    .get(flight.list)
    .post(flight.create)

router.route('/:id')
    .get(flight.read)
    .put(flight.update)
    .patch(flight.update)
    .delete(flight.delete)


module.exports=router


