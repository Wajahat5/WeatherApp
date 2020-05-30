console.log("client side js file loaded")
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

const s=document.querySelector('input')
const  weatherForm=document.querySelector('form')
const m1=document.querySelector('#message1')
const m2=document.querySelector('#message2')
m1.textContent=''
m2.textContent=''
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    m1.textContent="Loading...."
    if(s.value){
        //http://localhost:3000/forecast?location=
    fetch('/forecast?location='+s.value).then((response)=>{
        response.json().then((data)=>{
           
            console.log(data)
            m1.textContent=data.des+". It is "+data.temp+" degree F, but it feels like "+data.apparenttemp+" degree F"

        })
    })}else{
        
        console.log("please provide a value")
        m1.textContent="please provide a value"
    }
    
    console.log('testing')
})