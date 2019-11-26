import { createSelector } from 'reselect'

const selecCart = state => state.cart

export const selectCartItems = createSelector(
    [selecCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selecCart],
    cart => cart.hidden
)

export const selectCartitemsCounts = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(( accumalatedQuantity,cartItem ) => accumalatedQuantity + cartItem.quantity, 0 )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(( accumalatedQuantity,cartItem ) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0 )
)