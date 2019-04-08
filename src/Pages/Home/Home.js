import React from 'react'
import Navbar from '../../Components/NavBar';
import Productor from '../../Components/Productor';
import Gallery from '../../Components/Gallery';
import Menu from '../../Components/Menu';
import Icon from '@material-ui/core/Icon';
import './styles.scss';
import anime from 'animejs';

export default class Home extends React.Component{

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

    render(){
        return(
            <div className="index-container">
                <div className="container">
                    <Navbar trigger={this.state.triggerBackground}/>
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
                                    type: "entree",
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
                        {/* <Productor data={{ 
                            ferme :[
                                {
                                    name: "GAEC Le Chenêt",
                                    src: require('../../assets/imgs/image1.png'),
                                    info: "https://www.bienvenue-a-la-ferme.com/auvergnerhonealpes/haute-/les-ollieres/ferme/la-ferme-du-chenet/135026",
                                    descriptif:"produits de la ferme : Viande de boeuf, veau de lait et porc en caissettes ou au détail mais aussi charcuterie : saucisses, jambons, terrines, ..."
                                },
                                {
                                    name: "Les jardins de Banset - Elsa Pittard-Mathieu",
                                    src: require('../../assets/imgs/ferme2.png'),
                                    info : "https://www.producteurs-savoie-mont-blanc.com/les-jardins-de-banset-fruits-a-la-ferme.html?origine_affinage=true&mid=1&action=result&origine_affinage=true",
                                    descriptif:"Petite exploitation agricole en production et transformation de fruits rouges et maraîchage AB certifié. Cueillette sauvage également. Entreprise à taille humaine, dans le respect des plantes et des hommes."
                                },
                                {
                                    name: "Les jardins de Saint Julien - Louis-Abel Alary",
                                    src: require('../../assets/imgs/ferme3.png'),
                                    info: "https://www.producteurs-savoie-mont-blanc.com/les-jardins-de-st-julien-legumes-a-la-ferme.html?origine_affinage=true&mid=1&action=result&origine_affinage=true",
                                    descriptif: "Les vignes, les céréales et les patûres qui occupaient autrefois le terrain ont été progressivement remplacées par la friche. Comment retrouver le lien entre l'homme et la terre? L'agriculture biologique et la permaculture était une évidence.Progressivement, le jardin prend forme en s'appuyant sur les particularités des milieux et du relief et en cherchant à les valoriser. Les légumes sont cultivés en Agricluture Biologique, avec une certification du bureau Alpes Contrôles."
                                },
                                {
                                    name: "Bio à la balme - Vanet Guy",
                                    src: require('../../assets/imgs/ferme4.png'),
                                    info:"https://www.producteurs-savoie-mont-blanc.com/bio-la-balme-legumes-a-la-ferme.html",
                                    descriptif: "Nous produisons des légumes, oeufs et des poulets entre fleuve et montagne, sur la commune de la Balme. Les bonnes terres d'alluvion du Rhône nous permettent de vous proposer au fil des saisons une belle gamme cultivée en agriculture biologique."
                                },
                                {
                                    name: "La ferme de Fournache - Noémie Maurette",
                                    src: require('../../assets/imgs/ferme5.png'),
                                    info: "https://www.producteurs-savoie-mont-blanc.com/ferme-de-la-fournache-legumes-a-la-ferme.html#media",
                                    descriptif:"Depuis 2014, la Ferme de la Fournache produit des légumes diversifiés, des petits fruits et des plantes aromatiques en agriculture biologique sur la commune de St-Jean-de-Maurienne."
                                }
                            ]        

                        }}/>
                    */}

                        
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
                                    img: require('../../assets/imgs/gallery1.png'),
                                    title:"Assiette1",
                                    cols: 1
                                },
                                {
                                    id: 2,
                                    img: require('../../assets/imgs/gallery2.png'),
                                    title: "Assiette2",
                                    cols: 1
                                },
                                {
                                    id: 3,
                                    img: require('../../assets/imgs/gallery3.png'),
                                    title: "Assiette3",
                                    cols: 1
                                },
                                {
                                    id: 4,
                                    img: require('../../assets/imgs/gallery4.png'),
                                    title: "Assiette4",
                                    cols: 1
                                },
                                {
                                    id: 5,
                                    img: require('../../assets/imgs/gallery5.png'),
                                    title: "Assiette5",
                                    cols: 2
                                },
                                {
                                    id: 6,
                                    img: require('../../assets/imgs/gallery6.png'),
                                    title: "Assiette6",
                                    cols: 3
                                },
                            ]
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}