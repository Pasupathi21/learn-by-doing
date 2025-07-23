const express = require('express')
const cluster = require('cluster')
const os = require('os')
const app = express()
app.use(express.json())

const route = express.Router()
const PORT = 7500
const getInstance = () => cluster.isMaster ? 'Master' : 'Worker'

route.get('/api/long-action', (req, res, next) => {
    try{
        console.log(cluster.isMaster)
        const num = Number(req?.params?.num) || Number.MAX_SAFE_INTEGER /2
        let count = 1;
        for(let i =0; i < num; i++){
            count++
        }
        return res.status(200).json({
            message: `${getInstance()}: total loop count ${count}`
        })
    }catch(e){
        return res.status(500).json({
            message: JSON.stringify(e)
        })
    }
})
route.get('/api/short-action', (req, res, next) => {
    try{
        console.log(cluster.isMaster)
        return res.status(200).json({
            message: `${getInstance()}: Message with stamp ${Date.now()}`
        })
    }catch(e){
        return res.status(500).json({
            message: JSON.stringify(e)
        })
    }
})

app.use(route)

// create one more cluster
if(cluster.isMaster){
    const core = os.cpus().length
    Array(core).fill(cluster.fork).forEach(fork => fork() )
}
app.listen(PORT, () => {
    console.log("App running on port 7500", cluster.isMaster)
})
