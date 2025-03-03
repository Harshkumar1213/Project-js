let input = document.querySelector("input");
let btn = document.querySelector("button");
let city = "";
let result = "";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "45680b1a618f2271fb8599e9468c2b34";

let weatherInfo = async () =>{
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonRes = await response.json();
    result = {
      name:jsonRes.name,
      temp:jsonRes.main.temp,
      tempMax:jsonRes.main.temp_max,
      tempMin:jsonRes.main.temp_min,
      feelsLike:jsonRes.main.feels_like,
      humidity:jsonRes.main.humidity,
      description:jsonRes.weather[0].description,
    };
    console.log(result);
    change();
    } catch (err){
      throw err
    }
  };

btn.addEventListener("click",function (e){
    e.preventDefault();
    city = input.value;
    console.log(city);
    weatherInfo ();
    input.value = "";
});

function change (){
  document.all[14].innerText=result.name;
  document.all[16].innerText=result.temp;
  document.all[18].innerText=result.tempMin;
  document.all[20].innerText=result.tempMax;
  document.all[22].innerText=result.feelsLike;
  document.all[24].innerText=result.humidity;
  document.all[26].innerText=result.description;
};



