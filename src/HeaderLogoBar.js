import React from 'react';
import Logo from './image/pngWeatherLogo.png'
import Title from './image/Title.png'

export default function HeaderLogoBar(){
return(
    <div style={{
            backgroundColor : '#7fc8f8',
            height : '100px',
            display : 'flex',
            alignItems : 'center',
            marginLeft : '20%',
            marginRight : '20%',
            borderRadius : '70%'
            }}>
        <img src={Logo} style={{maxHeight: '80%', maxWidth: '80%', marginLeft : '10%', marginRight : '10%', blockSize: 'auto'}} alt='Error'></img>
        <img src={Title} style={{heigt: '50%', maxWidth: '50%', blockSize: 'auto'}} alt='Error'></img>
    </div>
)
}
