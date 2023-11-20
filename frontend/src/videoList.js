import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'


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
                <Card sx={{border:"2px solid white",position:"absolute",padding:2,width:"25%",marginLeft : "1350px",marginTop:2,background: 'linear-gradient(yellow,pink,yellow,pink,yellow)', opacity:1,height:"200%",display:"flex",flexDirection:"column",alignItems:"center"}}>

                    <Card sx={{margin:"2px" ,border:"2px solid black",borderRadius:"5px",width:"80%",height:"20%"}}>
                        <CardMedia
                            image = "../public/6223.jpg"
                        />
                    </Card>
                    <Card sx={{margin:"2px" ,border:"2px solid black",borderRadius:"5px",width:"80%",height:"20%"}}>
                        <CardMedia
                            image = "../public/6223.jpg"
                        />
                    </Card>
                    <Card sx={{margin:"2px" ,border:"2px solid black",borderRadius:"5px",width:"80%",height:"20%"}}>
                        <CardMedia
                            image = "../public/6223.jpg"
                        />
                    </Card>
                    <Card sx={{margin:"2px" ,border:"2px solid black",borderRadius:"5px",width:"80%",height:"20%"}}>
                        <CardMedia
                            image = "../public/6223.jpg"
                        />
                    </Card>

    
                </Card>
            </Box>
        )

    }

};

export default VidList;
