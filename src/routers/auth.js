"use stirct"


const router=require('express').Router()
const auth=require('../controllers/auth')

router.route('/login').post(auth.login)
router.route('/resresh').post(auth.refresh)
router.route('/logout').get(auth.logout)



module.exports=router