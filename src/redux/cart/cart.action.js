import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const ClearCartItemFromCart = item => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
})

export const RemoveItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})