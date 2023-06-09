import {ADD_FAVOURITE} from './Actions'
import { REMOVE_FAVOURITE } from './Actions';




const initialState ={
    myFavourites: [],
};

const rootReducer = (state = initialState, action) =>{ 
    switch(action.type){

        case ADD_FAVOURITE:
            return{
                ...state,
                myFavourites:[state.myFavourites, action.payload],
            };
        
        case REMOVE_FAVOURITE:
            return{
                ...state,
                myFavourites: state.myFavourites.filter(
                    (char) => char.id !== action.payload
              ),
            }

        default:
            return {...state};
    }
};
export default rootReducer;