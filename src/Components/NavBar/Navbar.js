import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styles.scss';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="nav-container">
                <AppBar position="fixed" color="primary" className={this.props.transparent ? "transparent" : ""}>
                    <Toolbar >
                        <img id="logo" alt="Logo" src={require('../../assets/imgs/logo.png')}/>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}