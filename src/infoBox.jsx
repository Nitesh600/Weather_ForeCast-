import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    const inti_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlndGglMjByYWluJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1523289149715-594065d1d3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90fGVufDB8fDB8fHww";
    const Rain_URL = "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return (
    <div>
       
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image = {info.humidity > 80 ? Rain_URL : info.temp > 20 ? HOT_URL: COLD_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       
         <div>Temperature: {info.temp}&deg;C</div> <br></br>
         <div>Humidity: {info.humidity}</div> <br></br>
         <div>Min Temperature: {info.tempMin}&deg;C</div> <br></br>
         <div>Max Temperature: {info.tempMax}&deg;C</div> <br></br>
         <div>Weather can be described as <b>{info.weather}</b> {info.feelsLike}&deg;C</div>
         
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
        );
}