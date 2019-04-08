import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import "./styles.scss";

export default withTheme()(function AdminNavBar(props) {
    return (
        <AppBar position="static">
            <Toolbar id="adminToolbar">
               <Link to="/"><img src={require("../../assets/imgs/logo.png")} id="logo" alt="Logo" className={
                    props.theme.palette.primary.contrastText === "#fff" ? "invert" : ""
                }/></Link>
                <Typography className="grow" variant="h6" color="inherit">{"Bonjour " + props.userName + " !"}</Typography>
                <Button
                    color="sec"
                    variant={props.active === "options" ? "contained" : "text" } 
                    color={props.active === "options" ? "secondary" : "inherit" } 
                    className={props.active === "options" ? "" : "adminButton"}
                    onClick={() => props.onClick("options")}
                >
                    <Typography variant="button" color="inherit">Options du site</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant={props.active === "menu" ? "contained" : "text" } 
                    color={props.active === "menu" ? "secondary" : "inherit" }
                    className={props.active === "menu" ? "" : "adminButton"}
                    onClick={() => props.onClick("menu")}
                >
                    <Typography variant="button" color="inherit">Menu</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant={props.active === "producteurs" ? "contained" : "text" } 
                    color={props.active === "producteurs" ? "secondary" : "inherit" } 
                    className={props.active === "producteurs" ? "" : "adminButton"}
                    onClick={() => props.onClick("producteurs")}
                >
                    <Typography variant="button" color="inherit">Producteurs</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant={props.active === "galerie" ? "contained" : "text" } 
                    color={props.active === "galerie" ? "secondary" : "inherit" } 
                    className={props.active === "galerie" ? "" : "adminButton"}
                    onClick={() => props.onClick("galerie")}
                >
                    <Typography variant="button" color="inherit">Galerie</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
});