const request=require('request')
address=process.argv[2]
const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=75f08e5d205e99faac73cc1eebb488e0&query='+lat+','+long+'&units=f'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('no connection')
        }else if(response.body.error){
            callback('cant find location')
        }
        else{
            temp=response.body.current.temperature
            apparenttemp=response.body.current.feelslike
            des=response.body.current.weather_descriptions[0]
            callback(undefined,temp,apparenttemp,des)
        }
    })
}
const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoid2FqYWhhdDEiLCJhIjoiY2s4cm1rOXZwMGE2ejNscWE0YWswazc2cCJ9.jvs40bSjffcRn-CvEzLeIQ&limit=1'
    request({url:url,json:true},(error,{body})=>{
      if(error){
        callback("no network connection")
    }
      else if(body.features)
       callback(undefined,{latitude: body.features[0].center[0],
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
    })
      else
       callback("invalid url")   
})
}

module.exports= {
  geocode,
  forecast
}