

 function Generate(){
    let day1,day2,day3;
    let windspeed,desc; 
let data=document.querySelector("#cin");
let serverData=document.querySelector("#cout")
let x;
windspeed=document.querySelector("#WindSpeed")
day1=document.querySelector("#day1")
desc=document.querySelector("#Description")
let ayush=fetch(`https://goweather.herokuapp.com/weather/${data.value}`)
day1=document.querySelector("#day1");
day2=document.querySelector("#day2");
day3=document.querySelector("#day3");
ayush
.then((value1)=>{
    return value1.json();
})
.then((value2)=>{
    serverData.value=value2.temperature;
    windspeed.value=value2.wind;
    desc.value=value2.description;
    console.log(value2);
    day1.value=value2.forecast[0].temperature;
    day2.value=value2.forecast[1].temperature;
    day3.value=value2.forecast[2].temperature;
})
.catch((error) => {
    console.log(error);
    serverData.value = "Error fetching data";
   //windspeed.value=value2.windspeed
  });
 }