import {combineReducers} from "redux";
import filters from "./filters";
import matreshkis from "./matreshka";
import cart from "./cart";


const rootReducer = combineReducers({
    filters,
    matreshkis,
    cart
})

export default rootReducer
