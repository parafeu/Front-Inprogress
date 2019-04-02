import { actions } from './actions';

const initialState = {
    theme: "blue"
}

export function reducer(state = initialState, action){
    let newState;
    switch(action.type){
        case actions.SET_THEME:
            newState = {...state};
            newState.theme = action.value;
            return newState;
        default:
            return state;
    }
}