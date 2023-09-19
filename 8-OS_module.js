const os = require('os')

// Info abut current user
const user = os.userInfo();
console.log(user);

// display system uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS ={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS);