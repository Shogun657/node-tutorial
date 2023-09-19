const {readFileSync, writeFileSync} = require("fs");
console.log("Start"); 
// to read from a file using its file path
const first = readFileSync('./content/first.txt','utf8'); 
const second = readFileSync('./content/second.txt','utf8'); 
console.log(first);
console.log(second);

// to create a new file using node 
// node will create a file if it is not present and if it is present the contents will be over-written
writeFileSync("./content/result-sync.txt",
`Here is your result : ${first},${second }`,
{flag:'a'}
)
console.log("done with this task")
console.log("starting the next one")

// Basically here the 'starting next task' log is waiting for 'done with this task' log which is 
// waiting for the fetching to finish. 
// but in async one 'startng next task' will get logged before the 'done with this task' logs