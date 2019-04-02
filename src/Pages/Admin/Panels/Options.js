import React from 'react'
import { Typography, Icon, TextField } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import palettes from "../../../Constants/palettes";
import { connect } from 'react-redux'
import { actionCreators } from '../../../store/actions';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import places from 'places.js';

import config from '../../../config.json';

class Options extends React.Component{

    state = {
        catchPhrase: "",
        content: EditorState.createEmpty(),
        address: {}
    }

    getPalettes = () => {
        let colors = [];
        Object.keys(palettes).forEach((color) => {
            colors.push(
                <Fab key={"palette_" + color} style={{ backgroundColor: palettes[color].palette.primary["500"] }} onClick={() => this.changePalette(color)}>
                {
                    this.props.theme === color && <Icon style={{ color: "white" }}>check</Icon>
                }
                {
                    this.props.theme !== color && <div></div>
                }
                </Fab>
            )
        })
        return colors;
    }

    changePalette = (color) => {
        if(this.props.theme !== color){
            this.props.dispatch(actionCreators.setTheme(color));
        }
    }

    componentDidMount = () => {
        var algolia = places({
            container: document.querySelector("#address-input"),
            appId: config.appId,
            apiKey: config.apiKey
        })

        algolia.on("change", (e) => console.log(e.suggestion))
    }

    render(){
        return(
            <div className="adminPanel">
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
                        value={this.state.catchPhrase}
                        onChange={(e) => this.setState({ catchPhrase: e.target.value })}
                    />
                    <Editor 
                        editorState={this.state.content}
                        onEditorStateChange={(content) => this.setState({ content })}
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    };
}

export default connect(mapStateToProps)(Options)