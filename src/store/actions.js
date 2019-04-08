import axios from 'axios';

export const REQUIRE_CONFIG = "REQUIRE_CONFIG";
export const RECEIVE_CONFIG = "RECEIVE_CONFIG";
export const SET_CONFIG = "SET_CONFIG";

function requestConfig(){
    return {
        type: REQUIRE_CONFIG
    }
}

function receiveConfig(data){
    return {
        type: RECEIVE_CONFIG,
        value: data
    }
}

export function setConfig(key, value){
    return {
        type: SET_CONFIG,
        key,
        value
    }
}

export function getConfig(){
    return function(dispatch){
        dispatch(requestConfig());
        return axios.get("http://172.28.59.28:3000/config")
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveConfig(response.data.content));
                }
            })
    }
}