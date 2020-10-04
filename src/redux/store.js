import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose ;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)


export default store
