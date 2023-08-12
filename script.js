const apiKey="9d936a9640db3aab385a7b2800c162eb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search-bar");
const searchBtn=document.querySelector("button");
const weatherIcon=document.querySelector('.icon');

async function checkWeather(city){
    const response =await fetch(apiUrl+ city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }else{
    let data=await response.json();
    

    document.querySelector(".city").innerHTML= "Weather in " +data.name;
    weatherIcon.src= "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
    document.querySelector(".description").innerHTML= data.weather[0].description ;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity+"%";
    document.querySelector(".wind").innerHTML="Wind Speed: "+data.wind.speed+"km/h";
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+data.name+"')"

      document.querySelector('.weather').style.display="block";
      document.querySelector('.error').style.display="none";
}
}
searchBox.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
        checkWeather(searchBox.value);
    }
})
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value); 
})
