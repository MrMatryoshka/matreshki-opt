export const addMatreshkiToCart =(matreshkaobj) => ({
    type:"ADD_MATRESHKI_TO_CARD",
    payload:matreshkaobj
})
export const clearCart =() => ({
    type:"CLEAR_CART",
})

export const removeItem =() => ({
    type:"REMOVE_CART_ITEM",
})
