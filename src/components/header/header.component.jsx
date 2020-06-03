import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {currentUser: state.user.currentUser}
}

export default connect(mapStateToProps)(Header)