import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import MasterUser from './pages/master-user/master-user.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} /> 
        <Route exact path='/signin' component={MasterUser} /> 
      </Switch>
    </div>
  )
}

export default App;
