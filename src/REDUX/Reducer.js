import {ADD_FAV, REMOVE_FAV} from './Action-types'


const initialState ={
    myFavorites: []
};
//                                  destructuring de action
const reducer = (state = initialState, {type, payload}) =>{ 
    switch(type){

        case ADD_FAV:
            return{
                ...state,
                myFavorites:[state.myFavorites, payload],
            };
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (fav) => fav.id !== payload
              ),
            }

        default:
            return {...state};
    }
};
export default reducer;