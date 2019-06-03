import React from 'react'
import { Typography, Icon, TextField, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Fab from '@material-ui/core/Fab';
import palettes from "../../../Constants/palettes";
import { connect } from 'react-redux'
import * as actions from '../../../store/actions';
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from 'react-draft-wysiwyg';
import places from 'places.js';

import config from '../../../config.json';

class Options extends React.Component{

    state = {
        catchPhrase: ""
    }

    getPalettes = () => {
        let colors = [];
        Object.keys(palettes).forEach((color) => {
            colors.push(
                <Fab key={"palette_" + color} style={{ backgroundColor: palettes[color].palette.primary["500"] }} onClick={() => this.changePalette(color)}>
                {
                    this.props.config.couleur === color && <Icon style={{ color: "white" }}>check</Icon>
                }
                {
                    this.props.config.couleur !== color && <div></div>
                }
                </Fab>
            )
        })
        return colors;
    }

    changePalette = (color) => {
        if(this.props.theme !== color){
            this.props.dispatch(actions.setConfig("couleur", color));
        }
    }

    componentDidMount = () => {
        var algolia = places({
            container: document.querySelector("#address-input"),
            appId: config.appId,
            apiKey: config.apiKey
        })

        algolia.on("change", (e) => {
            if(e.suggestion && e.suggestion.value){
                this.props.dispatch(actions.setConfig("address", e.suggestion.value));
            }
        });
        algolia.on("clear", () => this.props.dispatch(actions.setConfig("address", null)));
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.status && prevProps.status !== this.props.status){
            if(this.props.status === "OK"){
                toast.success("Paramètres sauvegardés");
            }
            if(this.props.status === "ERROR"){
                toast.error("Impossible de sauvegarder les paramètres");
            }
            this.props.dispatch(actions.resetConfig());
        }
    }

    editorChange = (content) => {
        this.props.dispatch(actions.setContenu("lerestaurant", content));
    }

    setOpenDay = (day) => {
        let ouverture = this.state.ouverture;
        if(ouverture[day]){
            delete ouverture[day];
        }else{
            ouverture[day] = true;
        }
        this.setState({ ouverture })
    }

    render(){
        return(
            <div className="adminPanel">
                <ToastContainer/>
                <div className="adminHead">
                    <Typography color="inherit" variant="h3" >Options du site</Typography>
                    <Typography color="inherit" variant="h5" >Sur cette page, vous pouvez paramétrer votre site</Typography>
                </div>
                <div className="adminSection">
                    <Typography color="inherit" variant="h5" >Couleur du site</Typography>
                    <div className="adminColors">
                        {
                            this.getPalettes()
                        }
                    </div>
                </div>
                <div className="adminSection">
                    <Typography color="inherit" variant="h5" >Textes du site</Typography>
                    <TextField
                        className="item"
                        label="Phrase d'accroche du site"
                        defaultValue={this.props.config.contenu.accroche}
                        onChange={(e) => this.props.dispatch(actions.setContenu("accroche", e.target.value ))}
                    />
                    <Editor
                        defaultEditorState={this.props.config.contenu.lerestaurant}
                        onEditorStateChange={this.editorChange}
                        wrapperClassName="item" 
                        editorClassName="editor" 
                        placeholder='Contenu de la section "Le restaurant"'
                        localization={{
                            locale: 'fr',
                        }}
                    />
                </div>
                <div className="adminSection">
                    <Typography style={{ marginBottom: "1em" }} color="inherit" variant="h5" >Adresse du site</Typography>
                    <input type="search" id="address-input" placeholder="Adresse"/>
                </div>
                <div className="adminSection">
                    <Typography style={{ marginBottom: "1em" }} color="inherit" variant="h5" >Jours d'ouverture</Typography>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["lundi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("lundi")))}>Lundi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["mardi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("mardi")))}>Mardi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["mercredi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("mercredi")))}>Mercredi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["jeudi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("jeudi")))}>Jeudi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["vendredi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("vendredi")))}>Vendredi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["samedi"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("samedi")))}>Samedi</Button>
                    <Button style={{ marginRight: "1em" }} variant="contained" color={this.props.config.ouverture.jour["dimanche"] ? "primary" : "default" } onClick={() => this.props.dispatch(actions.setOpenDay(("dimanche")))}>Dimanche</Button>
                </div>
                <div className="adminSection">
                    <Button variant="contained" color="primary" style={{ float: "right" }} onClick={() => this.props.dispatch(actions.saveConfig(this.props.config))}>
                        Sauvegarder
                        <SaveIcon style={{ marginLeft: 10 }}/>
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.config,
        jour: state.config.ouverture.jour,
        status: state.status
    };
}

export default connect(mapStateToProps)(Options)