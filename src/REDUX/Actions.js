export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';


export const addFavourite =  (character) =>{
    return{type:ADD_FAVOURITE, payload:character}
}


export const removeFavourite = (id) =>{
    return{type:REMOVE_FAVOURITE, payload:id}
}

