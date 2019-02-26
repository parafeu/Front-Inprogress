import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import Home from './Pages/Home/Home';

import "typeface-roboto";

import "./styles.scss";

class App extends Component {

    themes = {
        green: createMuiTheme({
            palette: {
                primary: {
                    light: "#80e27e",
                    main: "#4caf50",
                    dark: "#087f23",
                    contrastText: "#000000"
                },
                secondary: {
                    light: "#cddc39",
                    main: "#cddc39",
                    dark: "#99aa00",
                    contrastText: "#000000"
                }
            },
            typography: {
                useNextVariants: true,
            },
        }),
        blue: createMuiTheme({
            palette: {
                primary: {
                    light: "#67daff",
                    main: "#03a9f4",
                    dark: "#007ac1",
                    contrastText: "#000000"
                },
                secondary: {
                    light: "#8bf6ff",
                    main:"#4fc3f7",
                    dark: "#0093c4",
                    contrastText: "#000000"
                }
            },
            typography: {
                useNextVariants: true,
            },
        })
    };

    state = {
        themeColor: "green"
    };

    render() {
        return (
            <MuiThemeProvider theme={this.themes[this.state.themeColor]}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Home/>
            </MuiThemeProvider>
        );
    }
}

export default App;
