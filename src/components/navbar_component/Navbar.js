import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css';
import logo from '../../assets/logo.png';

const NavBar = props => {
    return (
        <div>
           <AppBar position="static">
                <Toolbar>
                        <a href="https://developers.giphy.com/docs/api/#quick-start-guide">
                            <img alt="giphy logo" src={logo}></img>
                        </a>
                    <Typography variant="h4" color="inherit">
                         Giphy App Test
                    </Typography>   
                </Toolbar>
            </AppBar>    
        </div>
    );
}

export default NavBar;