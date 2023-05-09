import React from 'react';
import HeaderLogoBar from './HeaderLogoBar';
import Body from './Body';

export default function App() {
  return (
    <React.Fragment>
    <div style={{
      backgroundColor : '#004E98',
      height : '1300px' 
    }}>
      <HeaderLogoBar/>
      <Body/>
    </div>
    </React.Fragment>
  );
}
