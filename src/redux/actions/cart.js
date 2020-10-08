export const addMatreshkiToCart =(matreshkaobj) => ({
    type:"ADD_MATRESHKI_TO_CARD",
    payload:matreshkaobj
})
export const clearCart =() => ({
    type:"CLEAR_CART",
})

export const removeItem =(id) => ({
    type:"REMOVE_CART_ITEM",
    payload:id
})
export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});
