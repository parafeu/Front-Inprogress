import React from 'react'
import { Card, Typography } from '@material-ui/core';

import './styles.scss';

export default class Menu extends React.Component{

    getEntrees = () => {
        let entrees = [];
        if(this.props.data && this.props.data.dishes){
            this.props.data.dishes.forEach(dish => {
                if(dish.type === "entree"){
                    entrees.push(<Typography key={dish.id}>{dish.name}</Typography>)
                }
            });
        }
        return entrees;
    }

    getPlats = () => {
        let plats = [];
        if(this.props.data && this.props.data.dishes){
            this.props.data.dishes.forEach(dish => {
                if(dish.type === "plat"){
                    plats.push(<Typography key={dish.id}>{dish.name}</Typography>)
                }
            });
        }
        return plats;
    }

    getDesserts = () => {
        let desserts = [];
        if(this.props.data && this.props.data.dishes){
            this.props.data.dishes.forEach(dish => {
                if(dish.type === "dessert"){
                    desserts.push(<Typography key={dish.id}>{dish.name}</Typography>)
                }
            });
        }
        return desserts;
    }

    getTypeNumber = (type) => {
        let number = 0;
        if(this.props.data && this.props.data.dishes){
            this.props.data.dishes.forEach(dish => {
                if(dish.type === type){
                    number++;
                }
            });
        }
        return number;
    }

    render(){
        let entree = this.getTypeNumber("entree") > 1 ? "Entrées" : "Entrée";
        let plat = this.getTypeNumber("plat") > 1 ? "Plats" : "Plat";
        let dessert = this.getTypeNumber("dessert") > 1 ? "Desserts" : "Dessert";
        return(
            <Card className="menu-card">
                <div className="menu-header">
                    <h3>{this.props.data.name}</h3>
                </div> 
                <div className="menu-content">
                    <div className="menu-category">
                        <h4>{entree}<span/></h4>
                        {
                            this.getEntrees()
                        }
                    </div>
                    <div className="menu-category">
                        <h4>{plat}<span/></h4>
                        {
                            this.getPlats()
                        }
                    </div>
                    <div className="menu-category">
                        <h4>{dessert}<span/></h4>
                        {
                            this.getDesserts()
                        }
                    </div>
                </div>
            </Card>
        )
    }
}