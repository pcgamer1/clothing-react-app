import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase.utils'

import CardDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>)
                 :(<Link className='option' to='/signin'>
                    SIGN IN
                 </Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : (<CardDropdown />)
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => {
    return {currentUser, hidden}
}

export default connect(mapStateToProps)(Header)