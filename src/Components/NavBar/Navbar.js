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
        return (
            <div className="nav-container">
                <AppBar position="fixed" color="primary" className={this.props.transparent ? "transparent" : ""}>
                    <Toolbar >
                        <img id="logo" alt="Logo" src={require('../../assets/imgs/logo.png')} />
                        {
                            this.state.width > 900 && (
                                <div className="right">
                                    <Button href="/#">Accueil</Button>
                                    <Button>Menu</Button>
                                    <Button>Nos producteurs</Button>
                                    <Button>Galerie</Button>
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