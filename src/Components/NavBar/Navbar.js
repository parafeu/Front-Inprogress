import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="nav-container">
                <AppBar position="fixed" color="primary" className={this.props.transparent ? "transparent" : ""}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}