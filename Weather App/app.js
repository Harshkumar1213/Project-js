let input = document.querySelector("input");
let btn = document.querySelector("button");
let city = "";
let result = "";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "45680b1a618f2271fb8599e9468c2b34";

let weatherInfo = async () =>{
    
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonRes = await response.json();

    if(response.status === 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".info").style.display = "none";
    }else {
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
    }
      
   
  };

btn.addEventListener("click",function (e){
    e.preventDefault();
    city = input.value;
    console.log(city);
    weatherInfo ();
    input.value = "";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".info").style.display = "block";
});

function change (){
  document.querySelector("#span1").innerHTML=result.name;
  document.querySelector("#span2").innerHTML=result.temp;
  document.querySelector("#span3").innerHTML=result.tempMin;
  document.querySelector("#span4").innerHTML=result.tempMax;
  document.querySelector("#span5").innerHTML=result.feelsLike;
  document.querySelector("#span6").innerHTML=result.humidity;
  document.querySelector("#span7").innerHTML=result.description;
};



