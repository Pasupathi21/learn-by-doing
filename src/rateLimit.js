const express = require('express')
const app = express()
const route = express.Router()
const PORT = 8500
const map = new Map()

function rateLimit(req, res, next) {
    console.log("Rate Limit...", req?.ip)
    const IP = req?.ip
    const PATH = req?.path
    const IP_WITH_PATH = `${IP}-${PATH}`
    console.log('IP_WITH_PATH', IP_WITH_PATH)
    const getReq = map.get(IP_WITH_PATH)
    const currentTime = Date.now()
    console.log("getReq", getReq)
    if(getReq){
        if(getReq?.count < getReq?.maxLimit && currentTime < getReq?.timeWindowInMins){
            getReq.count++
            console.log("2 IF >>> ", getReq)
            map.set(IP_WITH_PATH, getReq)

        }else{
            console.log("ELSE >>> ")
            res.status(429).json({
                message: 'Too many request'
            })
            return
        }
    }else {
        console.log("FIRST ELSE >>>>")
        const timeWindowInMins =  currentTime + (1 * 60 * 1000)
        const reqObj = {
            time: currentTime,
            count: 1,
            timeWindowInMins,
            maxLimit: 5,
            lastCallTime: currentTime
        }
        map.set(IP_WITH_PATH, reqObj)
    }
    next()
}

route.get('/api/get-message/:id', rateLimit, (req, res, next) => {
    try{
        
        res.status(200).json({
            message: "it's working..."
        })
    }catch(error) {
        res.status(500).json({
            message: JSON.stringify(error)
        })
    }
})

app.use(express.json())
app.use(route)
app.listen(PORT, () => {
    console.info("App is up and running on port 8500")
})
