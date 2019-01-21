import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
import Icon from '@material-ui/core/Icon';
import './styles.scss';

export default class Index extends React.Component{

    state = {
        navTransparent: true
    };

    componentDidMount = () => {
        let part1 = document.querySelector("#part1");
        document.addEventListener('scroll', () => {
            if(window.scrollY >= (part1.scrollHeight - 64)){
                this.setState({ navTransparent: false });
            }else {
                this.setState({navTransparent: true});
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
                </div>
                <div id="part1">
                    <Productor name ="GAEC Le Chenêt" url={require('../../assets/imgs/image1.png') } />
                </div>
            </div>
        )
    }
}