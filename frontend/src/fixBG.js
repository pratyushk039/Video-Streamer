import React from "react";
import Box from '@mui/material/Box';

const backgroundStyle = {
    position: 'fixed', // or 'absolute' depending on your layout needs
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1, // Set a z-index value to position it behind other content
    //background: 'linear-gradient(to right, #280333, black,#280333)', // Your gradient or background color
    backgroundImage: 'url(/img1.jpg)',
    backgroundSize: 'cover',
   
  };

class BG extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
     componentDidMount(){
        return;
     }
    // componentDidUpdate(){}

    render(){
        return(
            <div style={backgroundStyle}>
            </div>
        )

    }

};

export default BG;
