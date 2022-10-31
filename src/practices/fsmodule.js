/**
 * @description __dirname es6 feature using to navigate the directory
 */

const fs = require('fs');
// Manually navigate to the test directory 
const path = `${__dirname}\\..\\test\\testPath.json`
// Using ASYNC and AWAIT
fs.readFile(path, 'utf-8', async (error, data) => {
    data = await data;
    console.log("Data", data);
})


