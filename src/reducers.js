import {
    CHANGE_SEARCH_FIELD,
    FETCHING_ROBOTS_PENDING,
    FETCHING_ROBOTS_SUCCESS,
    FETCHING_ROBOTS_FAILED
} from './constant'

const ininitialStateSearch ={
    searchField: ''
};


export const searchRobots =(state = ininitialStateSearch, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return {...state, searchField: action.payload}
        default:
            return state;
    }
}

const initialStateRobots={
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots =(state= initialStateRobots, action={}) =>{
    switch(action.type){
        case FETCHING_ROBOTS_PENDING:
            return {...state, isPending: true}
        case FETCHING_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false}
        case FETCHING_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false}
        default:
            return state;
    }
}