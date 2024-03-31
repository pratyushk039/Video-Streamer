import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


class VidList extends React.Component{
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
            <Box>
                <Card sx={{border:"2px solid white",position:"absolute",width:"25%",marginLeft : "1100px",marginTop:2,background: 'linear-gradient(black,purple,black)', opacity:1,height:"200%"}}>
                </Card>
            </Box>
        )

    }

};

export default VidList;
