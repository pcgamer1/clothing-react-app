import React from 'react'
import StripCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51GqMMOGggWELsD6sWYMf0WrJfaEcBmgQcnZEciCHPEuaoNnW9PIzq17aJSD8A1C7z0yt4uzCw6HvyBTqUOLZ8Aee00gzdpoIx6'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripCheckout 
            label='Pay Now'
            name='DAWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton