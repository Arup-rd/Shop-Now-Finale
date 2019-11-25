import React from 'react'
import { connect } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selector'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.style.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItems => <CartItem key={cartItems.id} item = {cartItems}/>)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);

