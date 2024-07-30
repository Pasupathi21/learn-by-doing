const fs = require("fs")
const path = require("path")
const { promisify } = require("util")

const dir_path = path.join(__dirname, 'data', 'ddl')
const files = fs.readdirSync(dir_path)
const schemaPath = path.join(__dirname, 'data', 'schema', `migration-${new Date().toISOString()}.sql`)


if(files?.length){
    const fileData = []
    const rf = promisify(fs.readFile)
    const wf = promisify(fs.writeFile)
    const outerFn = async () => {

        const fn = async () => {
    
            for(let i =0; i < files?.length; i++){
                const data = await rf(path.join(dir_path, files[i]), 'utf8')
                console.log("data", data)
                fileData.push(data)
            }
            return Promise.resolve(fileData)
        }
        fn().then(async () =>  {
            try{

                console.log("arr >>>>>>>>>>>.", fileData)
                await wf(schemaPath, fileData.join(" "), 'utf8')
            }catch(e){
                console.log("error >>>>>", e)
            }
    })
    }
    // fn()
    console.log(outerFn())
    // console.log("array", fileData)
}
console.log("files >>>>", files)