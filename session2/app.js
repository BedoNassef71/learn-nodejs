const { readFile, writeFile, read } = require('fs')

const file = readFile('./content/bedo.txt', 'utf-8', (err, res) => {

    var myRes, myRes2;
    if (err) {
        console.log(err)
    } else {
        myRes = res
        console.log(res)
        readFile('./content/myFolder/test.txt', 'utf-8', (err2, res2) => {
            if (err2) {
                console.log(err2)
                return
            } else {
                myRes2 = res2
                console.log(myRes2)
                writeFile('./content/res-async.txt', `1 : ${myRes}, 2 : ${myRes2}`, { flag: 'a' }, (werr, wres) => {
                    if (werr) {
                        console.log(werr)
                        return
                    }
                    console.log(wres)
                    console.log('Done')
                })
            }
        })
    }

})



// console.log(file)