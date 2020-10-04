
const initialState ={
   items:[],
    isLoaded:false
}

const matreshkis = (state = initialState, action) => {

    switch (action.type){

        case 'SET_MATRESHKI' :
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default :
            return state
    }

};
export default matreshkis
