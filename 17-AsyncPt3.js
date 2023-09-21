// we can shorten down the previous two versions by using the utils library
const {readFile, writeFile} = require('fs');
const utils = require('util');
const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile);

// declaring an async function
const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        console.log(first,second);
        await writeFilePromise('./result-new.txt',`THIS IS THE RESULT : ${first} ${second}`);
    } catch(error) {
        console.log(error);
    }
        
}
start();
