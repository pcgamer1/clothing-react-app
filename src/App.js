import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import GlobalStyle from './global.styles'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import MasterUser from './pages/master-user/master-user.component'
import CheckoutPage from './pages/checkout/checkout.component' 

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

class App extends React.Component {

  constructor() {
    super()
    this.state={ currentUser: null }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} /> 
          <Route exact path='/checkout' component={CheckoutPage} /> 
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<MasterUser />)} /> 
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, {checkUserSession})(App)
