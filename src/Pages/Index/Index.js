import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
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
            }else{
                this.setState({ navTransparent: true });
            }
        })
    };

    render(){
        return(
            <div className="index-container">
                <Navbar transparent={this.state.navTransparent}/>
                <div id="header">
                </div>
                <div id="part1">
                    <Productor/>
                </div>
            </div>
        )
    }
}