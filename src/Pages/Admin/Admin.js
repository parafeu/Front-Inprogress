import React from 'react';
import AdminNavBar from '../../Components/AdminNavBar/AdminNavBar';
import { Galerie, Menu, Options, Producteurs } from './Panels'

import './Panels/styles.scss';

export default class Admin extends React.Component{

    state = {
        active: "options"
    }

    setActive = (active) => this.setState({ active });

    render(){
        let Panel;
        switch(this.state.active){
            case "options":
                Panel = Options;
                break;
            case "menu":
                Panel = Menu;
                break;
            case "producteurs":
                Panel = Producteurs;
                break;
            case "galerie":
                Panel = Galerie;
                break;
        }
        return(
            <div>
                <AdminNavBar userName="Admin" active={this.state.active} onClick={this.setActive}/>
                <Panel/>
            </div>
        )
    }
}