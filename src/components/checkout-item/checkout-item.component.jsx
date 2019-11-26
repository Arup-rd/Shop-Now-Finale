import React from 'react'
import { connect } from 'react-redux'

import {ClearCartItemFromCart , AddItem, RemoveItem} from '../../redux/cart/cart.action'
import './checkout-item.style.scss'


const CheckOutItem= ({cartItems, clearItem,AddItem, RemoveItem}) => {

    const {name,quantity,price,imageUrl} = cartItems
    
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> RemoveItem(cartItems)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> AddItem(cartItems)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> clearItem(cartItems)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(ClearCartItemFromCart(item)),
    AddItem : item => dispatch(AddItem(item)),
    RemoveItem : item => dispatch(RemoveItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);