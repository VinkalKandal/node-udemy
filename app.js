const express = require('express')
const app = express()

   app.use('/users',(req,res,next)=>{
    res.send('<h1>Hello Users</h1>')
  })
    app.use('/',(req,res,next)=>{
    console.log('..i')
    res.send('<h1> </h1>')
  })

app.listen(3000,()=>{console.log('Running 3000')});