
const os = require('os')

// console.log(os.userInfo())
// console.log(os.uptime())

const currentOs = {
    name : os.type(),
    release : os.release(),
    memory : os.totalmem(),
    freeMemory : os.freemem(),
}



console.log(currentOs)