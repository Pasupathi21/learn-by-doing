const fs = require('fs')
const path = require('path')

const inputPath = path.join(__dirname, 'data', 'batch-process', `batch-file-input.json`)
const outputPath = path.join(__dirname, 'data', 'batch-process', `batch-file-output.json`)
const generateInput = (inputSize = 10) => {
    try {
        const data = Array(inputSize).fill({}).map((m, i) => ({ item: i + 1, isBatchCompleted: false }))
        fs.writeFileSync(inputPath, JSON.stringify(data))
    } catch (error) {
        console.log('generateInput error', error)
    }
}

// read file data process
const processFileData = (batchSize = 10) => {
    batchSize = Math.floor(batchSize)
    const fileData = fs.readFileSync(inputPath, 'utf-8')
    const parsedData = JSON.parse(fileData)
    if (Array.isArray(parsedData)) {
        console.log("Array")

        // const length = batchSize < parsedData.length ?
        //     Math.ceil(parsedData.length / batchSize)
        //     : parsedData.length
        let chunk = []
        let batchOutput = [] 
        // add batchSize direct to the for loop postincrement
        for(let i=0; i < parsedData.length ; i+= batchSize){
            console.log("i : ", i, 'batch: ', i+batchSize)
            chunk = parsedData.slice(i, i + batchSize)
            // chunk = i === 0 ? parsedData.slice(i, (((i + 1) * batchSize))) : 
            // i +1 === length ? parsedData.slice(i * batchSize)
            // :parsedData.slice((i * batchSize), ( (i+1) * batchSize))
            console.log("chunk >>>>>", chunk)
            batchOutput.push(
                ...chunk.map(m => ({...m, isBatchCompleted: true }))
            )
        }
        fs.writeFileSync(outputPath, JSON.stringify(batchOutput))
    }

}
console.log("batch file creation inprogress >>")
generateInput(60)
console.log("batch file creation completed >>")

console.log("batch file process started >>")
processFileData(6)
console.log("batch file process completed >>")


