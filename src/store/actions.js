import axios from 'axios';
import config from '../config.json';
import { convertToRaw } from 'draft-js';

export const REQUIRE_CONFIG = "REQUIRE_CONFIG";
export const RECEIVE_CONFIG = "RECEIVE_CONFIG";
export const SET_CONFIG = "SET_CONFIG";
export const SET_CONTENU = "SET_CONTENU";
export const OK_CONFIG = "OK_CONFIG";
export const ERROR_CONFIG = "ERROR_CONFIG";
export const RESET_CONFIG = "RESET_CONFIG";
export const SET_OPEN_DAY = "SET_OPEN_DAY";

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

function okConfig(){
    return {
        type: OK_CONFIG
    }
}

function errorConfig(){
    return {
        type: ERROR_CONFIG
    }
}

export function setConfig(key, value){
    return {
        type: SET_CONFIG,
        key,
        value
    }
}

export function setContenu(key, value){
    return {
        type: SET_CONTENU,
        key, 
        value
    }
}

export function setOpenDay(day){
    return {
        type: SET_OPEN_DAY,
        value: day
    }
}

export function resetConfig(){
    return {
        type: RESET_CONFIG
    }
}

export function saveConfig(data){
    return function(dispatch){
        let body = data;
        if(body.contenu.lerestaurant){
            body.contenu.lerestaurant = JSON.stringify(convertToRaw(body.contenu.lerestaurant.getCurrentContent()));
        }
        return axios.put(config.fpApi + "/config", body).then(response => {
            if(response.status === 200){
                dispatch(okConfig())
            }else{
                dispatch(errorConfig());
            }
        })
        .catch(() => dispatch(errorConfig()));
    }
}

export function getConfig(){
    return function(dispatch){
        dispatch(requestConfig());
        return axios.get(config.fpApi + "/config")
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveConfig(response.data.content));
                }
            })
    }
}