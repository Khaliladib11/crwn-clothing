import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signIn' component={SignInUp}/>
      </Switch>
    </div>
  );
}

export default App;
