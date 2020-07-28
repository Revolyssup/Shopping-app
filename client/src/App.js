import React from 'react';
import {Route,Switch} from 'react-router-dom'
// import Routes from './routes/routes'
import {useHistory} from 'react-router-dom'
import Navbar from '../src/ui/navbar/navbar'
import Checkout from './pages/checkout/checkout'
import Cart from './pages/cart/cart'
import Login from './pages/auth/login'
import Home from './pages/home/home'
import './App.css';


const App=(props)=>{


    const history=useHistory()
    React.useEffect(()=>{
        history.push("/login")
    },[])

        return(

    <div className="App">
         <Navbar />
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/" component={Home} exact/>
            <Route path="/cart" component={Cart} exact/>
            <Route path="/checkout" component={Checkout}/>
        </Switch>
 
    </div>
        )
    }

export default App;
