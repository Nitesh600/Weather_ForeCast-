 import { useState } from "react";
import InfoBox from "./infoBox.jsx";
 import SearchBox from "./SearchBox.jsx"
 
 
 export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState(
        {
            city: "Mathura",
              feelsLike: 33,
             humidity: 76,
             temp: 28.64,
             tempMax : 28.64,
            tempMin : 28.64,
            weather : "light rain",
          });
          let updateInfo = (newinfo)=>{
            setweatherInfo(newinfo);
          }
    return(
    <div style={{textAlign: "center"}}>
        <h2 >Weather App</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
        );
 }