import { getProduct }  from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function (initialState){
    return createStore(
        getProduct,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}