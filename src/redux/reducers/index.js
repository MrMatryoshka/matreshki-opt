import {combineReducers} from "redux";
import filters from "./filters";
import matreshkis from "./matreshka";


const rootReducer = combineReducers({
    filters,
    matreshkis
})

export default rootReducer
