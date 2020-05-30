const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const publicDirPath=path.join(__dirname,'../public')
const partialsPath=path.join(__dirname,'../partials')
const search=require('./weatherApp.js')
app.set('view engine','hbs')
viewPath=path.join(__dirname,'../template')
hbs.registerPartials(partialsPath)
app.set('views',viewPath)

// hbs file should be present in a folder named view within the source folder
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Wajahat'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name: 'Wajahat',
        title:'About page'
    })
})
//linking views folder path in another location

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'help',
        name: 'Wajahat'
    })
})
app.get('/forecast',(req,res)=>{   
    if(!req.query){
      return res.send({error:"No search term provided"})
    }
    search.geocode(req.query.location,(error,data)=>{
        if(error){
          res.send(error)
        }
        else{
          search.forecast(data.latitude,data.longitude,(error,temp,apparenttemp,des)=>{
              if(error){
                  res.send(error)
              }
              else{
                  res.send({des,temp,apparenttemp})
                  //res.send(des+". It is "+temp+" degree F, but it feels like "+apparenttemp+" degree F")
              }
              
          })
      
        }
          
         
      })
  
  })
app.get('/help/*',(req,res)=>{
    res.render('errorPage',{
        title: 'Help Article',
        name: 'Wajahat'
    })
})
app.get('*',(req,res)=>{
    res.render('errorPage',{
        title: 'Page',
        name: 'Wajahat'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})
