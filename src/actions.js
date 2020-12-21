import {
    CHANGE_SEARCH_FIELD,
    FETCHING_ROBOTS_PENDING,
    FETCHING_ROBOTS_SUCCESS,
    FETCHING_ROBOTS_FAILED
} from './constant'
export const setSearchField =(text) => ({

    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobots= () => (dispatch) =>{  
        dispatch({type:FETCHING_ROBOTS_PENDING});
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: FETCHING_ROBOTS_SUCCESS, payload:data}))
        .catch(error => dispatch({type: FETCHING_ROBOTS_FAILED, payload:error}))    
    
 }