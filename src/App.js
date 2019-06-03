import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import palettes from './Constants/palettes';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';

import "typeface-roboto";

import "./styles.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        if(!this.props.isFetchingConfig){
            return (
                <MuiThemeProvider theme={createMuiTheme(palettes[this.props.couleur])}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <Router>
                        <Route path="/" exact component={Home}/>
                        <Route path="/admin" component={Admin}/>
                    </Router>
                </MuiThemeProvider>
            );
        }else{
            return <div id="waiting-screen">
                <img src={require("./assets/imgs/logo.png")}/>
                <CircularProgress/>
            </div>;    
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetchingConfig: state.isFetchingConfig,
        couleur: state.config.couleur
    };
}

export default connect(mapStateToProps)(App);
