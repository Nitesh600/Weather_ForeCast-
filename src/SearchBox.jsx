import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';



export default function SearchBox({updateInfo}){
    let [city, setcity] = useState("");
    let [error, seterror] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "da5d64802c1d1e1c57fc96588b46d90a";
   
    let getWeatherInfo = async()=>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            let result = {
               city : city,
               temp: jsonRes.main.temp,
               tempMin: jsonRes.main.temp_min,
               tempMax: jsonRes.main.temp_max,
               humidity: jsonRes.main.humidity,
               feelsLike: jsonRes.main.feels_like,
               weather: jsonRes.weather[0].description,
            };
            console.log(result);
            return result;
           } catch(err){
             seterror("No such API found");
           }
        }


    let handleChange = (event)=>{
        setcity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo =  await getWeatherInfo();
        updateInfo(newinfo);
         
    }
   return(
   <div className='SearchBox'>
    
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> 
    <br></br> <br></br>
    <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
    </div>
    );
}