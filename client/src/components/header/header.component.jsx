import React from 'react'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import CardDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                (<OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>)
                 :(<OptionLink to='/signin'>
                    SIGN IN
                 </OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : (<CardDropdown />)
        }
    </HeaderContainer>
        
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, {signOutStart})(Header)