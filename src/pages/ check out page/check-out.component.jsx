import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selector'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import './check-out.style.scss'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const CheckOutPage = ({cartItems, Total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItems => (<CheckOutItem key={ cartItems.id} cartItems={cartItems}/>))
        }
        <div className='total'>
         <span>Total: ${Total}</span>
        </div>
        <div className='text-warning'>
           ** please use the following test credit cards for payment **
           <br/>
            Test card number - 4242 4242 4242 4242  Exp: 3/20  CVV: 123
        </div>
        <StripeCheckoutButton price={Total}/>
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    Total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);