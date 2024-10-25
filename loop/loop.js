const { data } = require('./data.js')
const fs = require('fs')

const newArr = []
const fn = async () => {
    const f = () =>  new Promise((rs, rj) => {
        for (let i =0; i < data.length; i++){
            console.log(">>>>>>>", data[i]["metal_details"].length)
            if(data[i]["metal_details"].length > 1){
                newArr.push(data[i])
            }
        }
        rs()
    })
    await f()
    return 
    
}

fn()
fs.writeFile('./filterdata.json', JSON.stringify(newArr), (er, d) => {
    if(er) console.log(er)
})