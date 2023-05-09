import React, {useState} from 'react';
import {TextField} from '@mui/material';
import MultiActionAreaCard from './Card';
import Rome from './image/rome.jpeg';
import Milan from './image/milan.jpg';
import Verona from './image/verona.jpg';
import SimpleSlider from 'SimpleSlider';

export default function Body(){

const APIKey = 'ca94bf0acc71bcec362e209a5936fb7b'
const [weather, setWeather] = useState([]);
const [SelectedCity, setSelectedCity] = useState();
const [SelectedCityDisabled, setSelectedCityDisalbled] = useState(true);
const [ExistingCity, setExistingCity] = useState(true);

const handleKeyDown = (event) => {
    const APIKey = 'ca94bf0acc71bcec362e209a5936fb7b';
    if (event.key === 'Enter') {
        if(weather!==''){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+weather+'&appid='+APIKey+"&lang=it")
        .then((response) => response.json())
        .then((data) => {
            if(data.cod!=='404'){
            setSelectedCity(data);
            setSelectedCityDisalbled(false);
            setExistingCity(true)} else {
                setExistingCity(false)
            }
        })
        .catch((err) => {
           console.log(err.message);
        });
    }else{
        setExistingCity(false);
    }}
};

return(
    <div className='Body'>
        <div className='MainItalianCity' >
            <MultiActionAreaCard imageURL= {Rome} title= 'Roma' APIKey = {APIKey}/>
            <MultiActionAreaCard imageURL= {Milan} title = 'Milano' APIKey = {APIKey}/>
            <MultiActionAreaCard imageURL= {Verona} title = 'Verona' APIKey = {APIKey}/>
        </div>
        <div className='ChooseYourCity'>
            <h2>SCOPRI CHE TEMPO FARA' NELLA TUA CITTA'</h2>
            <TextField label="Inserisci la città" id="fullWidth" style={{
                height : '40px',
                width: '80%'
                }} onChange={(e) =>{setWeather(e.target.value)}} onKeyDown={handleKeyDown}/>
        </div>    
        <div className='RenderSelectedCity'>
                {ExistingCity===true
                ? SelectedCityDisabled===false
                    ?   <SimpleSlider city={SelectedCity}></SimpleSlider>
                    :   null
                : <p style={{textAlign: 'center', lineHeight:'300px', height:'300px', fontSize: '20px'}}>Seleziona una città esistente</p>
                } 
        </div>
    </div>
    )
}