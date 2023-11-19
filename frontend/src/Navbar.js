import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

// const loggedin = true;
class Navbar extends React.Component{
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
                <AppBar position="static" sx={{background: 'linear-gradient(to right, black,#170329,black)',opacity:1}} >
                    <ToolBar sx={{ display: 'flex', justifyContent: 'space-between' , color:"white"}}>
                    <IconButton sx={{margin:1,color:"white"}}>
                        <MenuIcon />
                    </IconButton>
                        Vidtoast
                        <Button color="inherit">Login</Button>
                    </ToolBar>
                </AppBar>
            </Box>
        )

    }

};

export default Navbar;