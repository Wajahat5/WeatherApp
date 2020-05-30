const express=require('express')
const app=express()
const port=process.env.PORT||3000
app.get('',(req,res)=>{
    res.send('<h1>Home Page</h1><br>This is the home Page')
})
app.get('/help',(req,res)=>{
    res.send('Help Page')
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/weather',(req,res)=>{
    res.send({
        location: 'Dibrugarh',
        condition: 'Damp'
    })
})
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
