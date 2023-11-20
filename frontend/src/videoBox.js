import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { setState } from "react";
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';



class Vidbox extends React.Component{
    constructor(){
        super();
        this.state = {
            likes : 0,
        };
    }

    incrementLikes = ()=>{
        this.setState({likes:this.state.likes+1});
    };


    componentDidMount(){
        return;
     }
    // componentDidUpdate(){}

    render(){
        return(
            <Box>
                <Card sx={{position:"absolute",height:"100%",width:"70%",margin : 2 ,background:'black'}}>
                <CardMedia
                sx={{border:"1px solid black",borderRadius:"5px"}}
                component="iframe"
                width="100%"
                height="80%"
                src="https://www.youtube.com/embed/PGqyvq9l0Mo?si=bhyppKcwDflrwNZe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                    <CardContent sx={{color:"white"}}>
                        Experimentation. Nice Vid btw.
                    </CardContent>
                    <CardActions>
                        <Button sx={{margin:1}} variant="contained">Share</Button>
                        <Button sx={{margin:1}} variant="contained" onClick={this.incrementLikes}>Like : {this.state.likes}</Button>
                    </CardActions>
                </Card>
            </Box>
        )

    }

};

export default Vidbox;
