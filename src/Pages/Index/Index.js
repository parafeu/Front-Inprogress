import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
import Menu from '../../Components/Menu';
import Icon from '@material-ui/core/Icon';
import './styles.scss';
import anime from 'animejs';

export default class Index extends React.Component{

    state = {
        navTransparent: true
    };

    componentDidMount = () => {
        let restaurant = document.querySelector("#restaurant");
        document.addEventListener('scroll', () => {
            if(window.scrollY >= (restaurant.scrollHeight - 64)){
                this.setState({ navTransparent: false });
            }else {
                this.setState({navTransparent: true});
            }
        });
        anime({
            targets: '.title-icon',
            opacity: 1,
            duration: 1000,
            delay: 2000,
            easing: 'linear',
            complete: () => {
                anime({
                    targets: '.title-icon',
                    translateY: 15,
                    loop: true,
                    direction: 'alternate',
                    easing: 'cubicBezier(0.5, 0, 0.5, 0)',
                })
            }
        })
    };

    render(){
        return(
            <div className="index-container">
                <Navbar transparent={this.state.navTransparent}/>
                <div id="header">
                    <div className="title-container">
                        <img src={require('../../assets/imgs/logo.png')} alt="logo"/>
                        <div></div>
                        <h1>Un restaurant éthique près de chez vous !</h1>
                    </div>
                    <a href="#restaurant" className="title-icon">
                        <Icon>keyboard_arrow_down</Icon>
                    </a>
                </div>
                <div id="restaurant">
                    <h2>Le restaurant</h2>
                </div>
                <div id="menu">
                    <h2>Menu</h2>
                    <Menu data={{
                        name: "Premier menu",
                        price: 35,
                        dishes: [
                            {
                                id: 1,
                                name: "Plat 1",
                                type: "entree"
                            },
                            {
                                id: 2,
                                name: "Plat 2",
                                type: "plat"
                            },
                            {
                                id: 3,
                                name: "Plat 3",
                                type: "dessert"
                            }
                        ]
                    }}/>
                </div>
                <div id="productors">
                    <Productor name="GAEC Le Chenêt"
                     src={require('../../assets/imgs/image1.png')}
                     info="https://www.bienvenue-a-la-ferme.com/auvergnerhonealpes/haute-/les-ollieres/ferme/la-ferme-du-chenet/135026"
                     descriptif="produits de la ferme : Viande de boeuf, veau de lait et porc en caissettes ou au détail mais aussi charcuterie : saucisses, jambons, terrines, ..."
                    />
                </div>
            </div>
        )
    }
}