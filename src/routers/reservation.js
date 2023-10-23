"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservation:

const reservation = require('../controllers/reservation')

const {isAdmin} = require('../middlewares/permission')

// URL: /reservations



router.route('/')
    .get(reservation.list)
    .post(isAdmin,reservation.create)

router.route('/:id')
    .get(reservation.read)
    .put(isAdmin,reservation.update)
    .patch(isAdmin,reservation.update)
    .delete(isAdmin,reservation.delete)

/* ------------------------------------------------------- */
module.exports = router