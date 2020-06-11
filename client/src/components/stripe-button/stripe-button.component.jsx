import React from 'react'
import StripCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51GqMMOGggWELsD6sWYMf0WrJfaEcBmgQcnZEciCHPEuaoNnW9PIzq17aJSD8A1C7z0yt4uzCw6HvyBTqUOLZ8Aee00gzdpoIx6'

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful')
            console.log(response)
        }).catch(error => {
            console.log('Payment error: ', error)
            alert('There was an issue with your payment. Please make sure you used the provided credit card')
        })
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