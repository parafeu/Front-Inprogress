import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
import Icon from '@material-ui/core/Icon';
import anime from 'animejs';
import './styles.scss';

export default class Index extends React.Component{

    state = {
        navTransparent: true
    };

    componentDidMount = () => {
        let restaurant = document.querySelector("#restaurant");
        document.addEventListener('scroll', () => {
            if(window.scrollY >= (restaurant.scrollHeight - 64)){
                this.setState({ navTransparent: false });
            }else{
                this.setState({ navTransparent: true });
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
                    <Productor/>
                </div>
            </div>
        )
    }
}