/**
 * @Description: 
 * @Author: weie weie@corp.netease.com
 * @Date: 2023-03-29 00:54:40
 */
const fs = require("fs")

function fromJsonFile(filename){
    console.log("fromJsonFile",filename)
    return ()=>{
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString()
        const json = JSON.parse(data);
        return json
    }
}


function fromJsFile(filename){
    return (req, res)=>{
        const json = require(`${__dirname}/data/${filename}.js`);
        return res.json(json)
    }
}

module.exports = {
    fromJsonFile,
    fromJsFile
}