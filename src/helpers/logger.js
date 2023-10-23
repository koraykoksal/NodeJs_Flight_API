"use strict"


const morgon = require('morgan')
const fs = require('node:fs')

const now = new Date()
const today = now.toISOString().split('T')[0]

console.log(today)

module.exports=morgon('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`)
})



