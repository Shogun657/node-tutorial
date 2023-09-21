const {readFile,writeFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

// Callback Function---------------------v
readFile('./content/first.txt','utf8',(err,data)=>{
    if(err)
    {
        return;
    }
    else{
        console.log(data);
    }
})


// Promise function
const getData = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const writeData = (path,message) =>{
    return new Promise((response,reject)=>{
        writeFile(path,message,(err)=>{
            if(err)
            {
                reject(err);
            }
            else{
                console.log("Data has been written successfully");
                response();
            }
    })
    })
}
// The above approach can be shortened like this
// setting up async-await function
const start = async()=>{

    try{    
        const first = await getData('./content/first.txt');
        const second = await getData('./content/second.txt');
        console.log(`THIS IS THE RESULT : ${first} ${second}`);                                  // Compare this code with file 11-FSasync.js
        await writeData('./result-new.txt',`THIS IS THE RESULT : ${first} ${second}`);
    } catch(error) {
        console.log(error);
    }
    
}
start();