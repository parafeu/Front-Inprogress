import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import palettes from './Constants/palettes';
import { connect } from 'react-redux';
import { Router, Link } from "@reach/router"

import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';

import "typeface-roboto";

import "./styles.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class App extends Component {

    state = {
        themeColor: "green"
    };

    render() {
        let RHome = () => <Home/>;
        let RAdmin = () => <Admin/>;
        return (
            <MuiThemeProvider theme={createMuiTheme(palettes[this.props.theme])}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Router>
                    <RHome path="/"/>
                    <RAdmin path="admin"/>
                </Router>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    };
}

export default connect(mapStateToProps)(App);
