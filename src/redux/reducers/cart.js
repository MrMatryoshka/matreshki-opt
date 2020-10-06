
const initialState ={
    items:{},
    totalPrice: 0,
    totalCount:0

}

const cart = (state = initialState, action) => {

    switch (action.type){

        case "ADD_MATRESHKI_TO_CARD" : {
            const newItems={
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id],
                        action.payload]

            }
            const AllMatreshki = Object.values(newItems).flat();
            // [].concat.apply([],Object.values(newItems))
            const totalPrice = AllMatreshki.reduce((sum,obj) => obj.price +sum ,0)
            return {
                ...state,
                items: newItems,
                totalCount: AllMatreshki.length,
                totalPrice: totalPrice
            }

            }
        default :
            return state
    }

};
export default cart
