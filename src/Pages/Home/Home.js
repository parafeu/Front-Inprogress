import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
import Gallery from '../../Components/Gallery';
import Menu from '../../Components/Menu';
import { withTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import tinycolor from 'tinycolor2';
import './styles.scss';
import anime from 'animejs';

class Home extends React.Component{

    state = {
        triggerBackground: false
    };

    componentDidMount = () => {
        document.addEventListener('scroll', () => {
            let header = document.querySelector("header.navbar");
            if(window.scrollY >= (window.innerHeight - header.clientHeight - 10)){
                this.setState({ triggerBackground: true });
            }else {
                this.setState({ triggerBackground: false });
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

    getMenuBackground = () => {
        let primary = this.props.theme.palette.primary.main;
        let color = tinycolor(primary);
        color.setAlpha(.15);
        let pattern = require("../../assets/imgs/pattern.jpg");
        return "linear-gradient(" + color.toRgbString() + ", " + color.toRgbString() + "), url("+pattern+")";
    }

    render(){
        return(
            <div className="index-container">
                <div className="container">
                    <Navbar trigger={this.state.triggerBackground}/>
                    <div id="header">
                        <div className="title-container">
                            <img src={require('../../assets/imgs/logo.png')} alt="logo"/>
                            <h2>{this.props.config.nom}</h2>
                            <div></div>
                            <h1>{this.props.config.contenu.accroche}</h1>
                        </div>
                        <a href="#restaurant" className="title-icon">
                            <Icon>keyboard_arrow_down</Icon>
                        </a>
                    </div>
                    <div id="restaurant">
                        <h2>Le restaurant</h2>
                    </div>
                    <div id="menu" style={{ backgroundImage: this.getMenuBackground() }}>
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
                        <h2>Nos producteurs</h2>
                        <Productor name="GAEC Le Chenêt"
                            src={require('../../assets/imgs/image1.png')}
                            info="https://www.bienvenue-a-la-ferme.com/auvergnerhonealpes/haute-/les-ollieres/ferme/la-ferme-du-chenet/135026"
                            descriptif="produits de la ferme : Viande de boeuf, veau de lait et porc en caissettes ou au détail mais aussi charcuterie : saucisses, jambons, terrines, ..."
                        />
                    </div>
                    <div id="gallery">
                        <h2>Galerie</h2>
                        <Gallery data={{
                            photo: [
                                {
                                    id: 1,
                                    img: '../../assets/imgs/gallery1.png',
                                    title:"Assiette1"
                                },
                                {
                                    id: 2,
                                    name: '../../assets/imgs/gallery2.png',
                                    title: "Assiette2"
                                }
                            ]
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateWithProps = (state) => {
    return {
        config: state.config
    }
}

export default connect(mapStateWithProps)(withTheme()(Home));