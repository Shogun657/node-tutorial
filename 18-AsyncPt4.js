const {readFile,writeFile} = require('fs').promises


// setting up async-await function
const start = async()=>{

    try{    
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        console.log(first,second);                                  // Compare this code with file 11-FSasync.js
        await writeFile('./result-new.txt',`THIS IS THE RESULT : ${first} ${second}`,
        {flag :'a'});
    } catch(error) {
        console.log(error);
    }
    
}
start();



