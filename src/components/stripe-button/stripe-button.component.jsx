import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100 
    const publishableKey = 'pk_test_YKC0MDj7Oj2VMyEqCVDiH06900uBeS2olC'

    const onToken = token => {
        console.log(token);
        alert('payment successfull')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Shop Now Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Total Price is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}

        />
    )
}

export default StripeCheckoutButton