 const initialState = {
   items:{},
    isLoaded:false
}


const matreshkaOne = (state = initialState, action) => {
    switch (action.type){

        case "MATRESHKA_ONE" : {
            const currentMatreshkaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items,
                    action.payload]
            return {
                ...state,
                items: currentMatreshkaItems ,
                isLoaded: true
            };

        }

        default :
            return state
    }


};

export default matreshkaOne;
