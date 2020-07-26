//Parent component for connected components
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../pages/home/home';
import Checkout from '../pages/checkout/checkout'
import Cart from '../pages/cart/cart'


const Routes=(props)=>{
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/cart" component={Cart} exact/>
            <Route path="/checkout" component={Checkout}/>
        </Switch>
    )
}
export default Routes