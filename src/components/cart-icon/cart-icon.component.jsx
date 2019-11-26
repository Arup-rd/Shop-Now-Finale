import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartitemsCounts} from '../../redux/cart/cart.selector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
   <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
   </div>
)


const mapDispatchToProps = dispatch => ({
   toggleCartHidden: ()=> dispatch(toggleCartHidden())
})


const mapSateToProps = createStructuredSelector({
   itemCount : selectCartitemsCounts
})

export default connect(mapSateToProps,mapDispatchToProps)(CartIcon);