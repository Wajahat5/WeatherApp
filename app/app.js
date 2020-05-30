const express=require('express')
const app=express()
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
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})
