
const initialState ={
   items:[],
    isLoaded:false
}

const matreshkis = (state = initialState, action) => {
    if (action.type === 'SET_MATRESHKI'){
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state
};
export default matreshkis
