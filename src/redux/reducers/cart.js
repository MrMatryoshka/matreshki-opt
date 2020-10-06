
const initialState ={
    items:{},
    totalPrice: 0,
    totalCount:0

}

const getTotalPrice = arr => arr.reduce((sum,obj) => obj.price +sum ,0)

const cart = (state = initialState, action) => {

    switch (action.type){

        case "ADD_MATRESHKI_TO_CARD" : {
            const currentMatreshkaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items,
                    action.payload]
            const newItems={
                ...state.items,
                [action.payload.id]:{
                    items:currentMatreshkaItems ,
                    totalPrice: getTotalPrice(currentMatreshkaItems),
                }


            }
            const items = Object.values(newItems).map((obj) => obj.items)
            const AllMatreshki = [].concat.apply([],items)
            const totalPrice = getTotalPrice(AllMatreshki)
            return {
                ...state,
                items: newItems,
                totalCount: AllMatreshki.length,
                totalPrice: totalPrice
            }

            }
        case "CLEAR_CART" : {
            return {
                items:{},
                totalPrice: 0,
                totalCount:0
            }
        }
        case "REMOVE_CART_ITEM":{
           return

        }
        default :
            return state
    }

};
export default cart
