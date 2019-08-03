import {createStore} from 'redux'

const initalState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    image_url: '',
    mortgage: '',
    rent: ''
}

export const STEP_ONE = 'STEP_ONE'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'



export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE= 'STEP_THREE'
export const CANCEL = 'CANCEL'

function reducer(state=initalState,action){
    switch(action.type){
        // case STEP_ONE:
        //     return {...state, name:action.payload,address:action.payload, city:action.payload,state:action.payload,zip:action.payload};
        case UPDATE_NAME: 
            return {...state, name:action.payload};
        case UPDATE_ADDRESS: 
        return {...state, address:action.payload};
        case UPDATE_CITY: 
        return {...state, city: action.payload};
        case UPDATE_STATE:
            return {...state, state: action.payload};
        case UPDATE_ZIP: 
        return {...state, zip:action.payload}
        case UPDATE_IMAGE_URL: 
            return {...state, image_url:action.payload};
        case UPDATE_MORTGAGE:
            return {...state, mortgage:action.payload,};
        case UPDATE_RENT: 
        return {...state, rent:action.payload}
        case CANCEL:
            return {initalState}
        default: return state
            
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())