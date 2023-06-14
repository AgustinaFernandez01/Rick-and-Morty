import {createStore, applyMiddleware, compose} from 'redux';
import Reducer from './Reducer';
import thunkMiddleware  from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;