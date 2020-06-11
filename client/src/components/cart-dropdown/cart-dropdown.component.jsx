import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {

    useEffect(() => {
        dropdown.current && dropdown.current.focus()
    }, [])

    const dropdown = useRef()

    return (
        <div className='cart-dropdown' tabIndex='-1' onBlur={() => dispatch(toggleCartHidden())} ref={dropdown}> 
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onMouseDown={() => {
                history.push('/checkout')
                // dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cartItems: selectCartItems(state)}
}

export default withRouter(connect(mapStateToProps)(CartDropdown))