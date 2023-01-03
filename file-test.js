const fs = require('fs')

// 同步的API
const files = fs.readdirSync('./')
console.log('files = ',files)

// 异步的API
fs.readdir('./',(err,files) => {
    if(err) {
        console.log('err = ',err)
    } else {
        console.log('files = ',files)
    }
})

