import * as actions from './actions';
import { convertFromRaw, EditorState } from 'draft-js';

const initialState = {
    isFetchingConfig: true,
    status: null,
    config: {
        couleur: "green",
        contenu: {}
    }
}

export function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case actions.REQUIRE_CONFIG:
            return Object.assign({}, state, { isFetchingConfig: true });
        case actions.RECEIVE_CONFIG:
            let config = action.value;
            if(config.contenu && config.contenu.lerestaurant !== ""){
                console.log(config.contenu.lerestaurant);
                config.contenu.lerestaurant = convertFromRaw( JSON.parse(config.contenu.lerestaurant));
                console.log(config.contenu.lerestaurant);
                config.contenu.lerestaurant = EditorState.createWithContent(config.contenu.lerestaurant);
                console.log(config.contenu.lerestaurant);
            }else{
                config.contenu.lerestaurant = EditorState.createEmpty();
            }
            return Object.assign({}, state, { config: config, isFetchingConfig: false });
        case actions.SET_CONFIG:
            newState = {...state};
            newState.config[action.key] = action.value;
            return newState;
        case actions.SET_CONTENU:
            newState = {...state};
            newState.config.contenu[action.key] = action.value;
            return newState;
        case actions.OK_CONFIG:
            newState = {...state, status: "OK"}
            return newState;
        case actions.ERROR_CONFIG:
            return {...state, status: "ERROR"}
        case actions.RESET_CONFIG:
            return {...state, status: null}
        case actions.SET_OPEN_DAY:
            newState = {...state};
            if(newState.config.ouverture){
                if(newState.config.ouverture.jour[action.value]){
                    delete newState.config.ouverture.jour[action.value]
                }else{
                    newState.config.ouverture.jour[action.value] = true;
                }
            }
            return newState;
        default:
            return state;
    }
}