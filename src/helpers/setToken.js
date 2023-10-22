"use strict"


const jwt = require('jsonwebtoken')


module.exports=function(userData,isRefresh=false){

    const data={
        access:userData.toJSON(),
        refresh:{_id:userData._id,password:userData.password},
        shortExpiresIn: '30m',
        longExpiresIn: '3d',
    }

    return{
        accessToken:jwt.sign(data.access,process.env.ACCESS_KEY, { expiresIn: data.shortExpiresIn }),
        refeshToken:(isRefresh ? undefined : jwt.sign(data.refresh, process.env.REFRESH_KEY, { expiresIn: data.longExpiresIn }))
    }
}

