import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { connect } from 'react-redux';

import './styles.scss';

export default class Navbar extends React.Component {

    state = {
        width: 0,
        drawerOpened: false
    }

    toggleDrawer = () => this.setState({ drawerOpened: !this.state.drawerOpened });

    componentDidMount = () => {
        this.setState({
            width: window.innerWidth
        });
        window.onresize = () => {
            this.setState({
                width: window.innerWidth
            })
        };
    };

    render() {

        let navbarClasses = "navbar";
        if(!this.props.trigger){
            navbarClasses += " transparent";
        }
        return (
            <div className="nav-container">
                <AppBar position="fixed" className={ navbarClasses }>
                    <Toolbar>
                        <img id="logo" alt="Logo" src={require('../../assets/imgs/logo.png')} />
                        {
                            this.state.width > 900 && (
                                <div className="right">
                                    <Button href="/">Accueil</Button>
                                    <Button href="/#restaurant">Le restaurant</Button>
                                    <Button href="/#menu">Menu</Button>
                                    <Button href="/#productors">Nos producteurs</Button>
                                    <Button href="/#gallery">Galerie</Button>
                                </div>
                            )

                        }
                        {
                            this.state.width <= 900 && (
                                <div className="right">
                                    <IconButton
                                        onClick={this.toggleDrawer}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                </div>    
                            )
                        }
                        {
                            this.state.width <= 900 && (
                                <Drawer 
                                    open={this.state.drawerOpened}
                                    onClose={this.toggleDrawer}
                                    anchor="right"
                                    color="primary"
                                >
                                    <List>
                                        <ListItem button component="a" href="/#" onClick={this.toggleDrawer}>
                                            <ListItemText>Accueil</ListItemText>
                                        </ListItem>
                                        <ListItem button component="a" href="/#" onClick={this.toggleDrawer}>
                                            <ListItemText>Menu</ListItemText>
                                        </ListItem>
                                        <ListItem button component="a" href="/#" onClick={this.toggleDrawer}>
                                            <ListItemText>Nos producteurs</ListItemText>
                                        </ListItem>
                                        <ListItem button component="a" href="/#" onClick={this.toggleDrawer}>
                                            <ListItemText>Galerie</ListItemText>
                                        </ListItem>
                                    </List>
                                </Drawer>
                            )
                        }   
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}