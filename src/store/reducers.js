import * as actions from './actions';

const initialState = {
    isFetchingConfig: true,
    config: {
        couleur: "green"
    }
}

export function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case actions.REQUIRE_CONFIG:
            return Object.assign({}, state, { isFetchingConfig: true });
        case actions.RECEIVE_CONFIG:
            return Object.assign({}, state, { config: action.value, isFetchingConfig: false });
        case actions.SET_CONFIG:
            newState = {...state};
            newState.config[action.key] = action.value;
            return newState;
        default:
            return state;
    }
}