import React, {useState , useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material';
import SunnyPNG from './image/sunnyPNG.png';
import CloudJPEG from './image/cloudJPEG.jpg';
import RainPNG from './image/rainPNG.png';
import FogPNG from './image/fogPNG.png';


export default function MultiActionAreaCard(props) {

    const [weather, setWeather] = useState([]);

    useEffect(() => {
      if (weather.length===0){
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+props.title+'&appid='+props.APIKey+"&lang=it")
         .then((response) => response.json())
         .then((data) => {
            setWeather(data.weather[0]);
         })
         .catch((err) => {
            console.log(err.message);
         })};
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function renderWeatherImage(condition){
      switch(condition){
        case 'Rain': return RainPNG;
        case 'Clouds': return CloudJPEG;
        case 'Clear': return SunnyPNG;
        case 'Mist': return CloudJPEG;
        case 'Fog': return FogPNG;
        default : return '';
      }
    }

  return (
    <Card sx={{ maxWidth: 345 }} style={{ 
      textAlign: 'center', 
      backgroundColor : '#EFF2F1'}}>
        <CardMedia
          component="img"
          height="140"
          image={props.imageURL}
          alt={props.imageAlert}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      <CardActions style={{
        textTransform : 'uppercase',
        justifyContent : 'space-around'}}>
      <img src={renderWeatherImage(weather.main)} style={{
        height : '50px', 
        width: '50px'}} alt='error'/>
        {weather.description}
      </CardActions>
    </Card>
  );
}