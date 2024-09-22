const fs = require('fs')

const dummyText = 'Node.js has a set of built-in modules which you can use without any further installation.'

fs.writeFile('test.txt',dummyText,(err)=>{
    if(err) throw err
    console.log('create file and write file successfully.')
})


fs.readFile('test.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log('Successfully read file',data)
})

const append = '\nAppend line is here'

fs.appendFile('test.txt',append,(err)=>{
    if(err) throw err
    console.log('append data successfully')
})

// fs.unlink('test.txt',(err)=>{
//     if(err) throw err
//     console.log('delete file successfully')
// })