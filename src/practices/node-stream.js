// stream is read or write files with piece by pice (chunk) handling large files

// node server from http module
const fs = require('fs')
const path = require('path')
const server = require('http').createServer()

// api functions
const streamFile = (req, res) => {

    // creating read stream object for give file path, 
    // readstream object containe diff listeners
    const readableStream = fs.createReadStream(path.resolve(__dirname, 'data', 'stream-data', 'audio.mp3'))
    readableStream.on('data', (chunk) => {
        // res.end(chunk)
        // creating pip for tranfer data with consistently untill the completion
        /**
         * pipe syntax
         * <SOURCE(streamObj)>.pipe(<DESTINATION(res)>)
         */
        // chunk.p
        // chunk.pipe(res)
        console.log("chunk >>>>>>", chunk)
    })


    // creating pip for tranfer data with consistently untill the completion
    /**
    * pipe syntax
    * <SOURCE(streamObj)>.pipe(<DESTINATION(res)>)
    */
    readableStream.pipe(res)

    // this "end" event will call,  once file reading completion
    readableStream.on('end', () => {
        // 
        res.end()
    })

    readableStream.on('error', (error) => {
        res.end(error)
    })
}

// "http" module defaultly inherit the "events" module, 
//  so server instance can access the event method
server.on("request", (req, res) => {
    console.log(req.url)
    if(req.url === '/stream'){
        streamFile(req, res)
    }else{
        res.end()
    }
})

// open server port with localhost
server.listen(7002, 'localhost', () => {
    console.log(`server running on port http://localhost:7002`)
}) 
