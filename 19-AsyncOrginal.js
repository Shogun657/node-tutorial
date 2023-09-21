const {readFile,writeFile} = require('fs').promises

// Even these things can be shortened by lot

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// Old traditional approach
// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err)
//     {
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

// New approach using then() and catch()

// This can further be shortened by utils library of the nodeJS
// const getData = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err)
//             {
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// The above approach can be shortened like this
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


// getData('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=> console.log(err))



