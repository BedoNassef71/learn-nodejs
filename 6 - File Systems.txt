// const fs = require('fs')
const { readFileSync, writeFileSync } = require('fs')

const bedo = readFileSync('./content/bedo.txt', 'utf-8')
const test = readFileSync('./content/myFolder/test.txt', 'utf-8')
console.log(bedo)
// console.log(test)

writeFileSync('./content/res.txt', `Bedo : ${bedo}\nTest : ${test}`, { flag: 'a' })

const res = readFileSync('./content/res.txt', 'utf-8')
console.log(res)