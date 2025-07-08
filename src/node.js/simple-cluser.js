const http = require('http')
const os = require('os')
const cluster = require('cluster')

setTimeout(() => {
    console.log(cluster.isMaster)
    if(cluster.isMaster){
        const logicalCoreCount = os.cpus().length / 2
        // create work instance
        for(let i =0; i < logicalCoreCount; i++){
            cluster.fork()
        }
    }
}, 2000)
if(cluster.isMaster){
    http.createServer((req, res) => {
        const pid = cluster.isWorker ? cluster?.worker?.process?.pid : 0 
        setTimeout(() => {
            console.log(pid)
            res.writeHead(200)
            res.end(pid)
        }, 1500)
    }).listen(8080)
}