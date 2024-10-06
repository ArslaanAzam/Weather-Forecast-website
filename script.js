const weatherContainer= document.getElementById("weather-div");
const searchbtn= document.getElementById("search-btn");
const apiKey="a4180f72bb0c4dcdec888aed635d6b8d"
const tempinfo=document.getElementById("temp-value");
const searchInput=document.getElementById("search-input");



function displayWeather(){
    const city=searchInput.value;
    console.log("clicked");
    console.log(city);
    weatherContainer.style.display = "block";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(api)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        console.log(data.main.temp);
        tempinfo.textContent=data.main.temp;
    })
   
}

searchbtn.addEventListener("click",displayWeather);