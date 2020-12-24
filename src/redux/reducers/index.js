import {combineReducers} from "redux";
import filters from "./filters";
import matreshkis from "./matreshka";
import cart from "./cart";
import matreshkaOne from "./matreshkaFirst";


const rootReducer = combineReducers({
    filters,
    matreshkis,
    cart,
    matreshkaOne
})

export default rootReducer
