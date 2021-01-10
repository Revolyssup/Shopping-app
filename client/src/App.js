import React,{useState,useEffect} from 'react';
import {Route,Switch,useHistory} from 'react-router-dom'
// import Routes from './routes/routes'
import Navbar from '../src/ui/navbar/navbar'
import Checkout from './pages/checkout/checkout'
import Cart from './pages/cart/cart'
import Login from './pages/auth/login'
import Home from './pages/home/home'
import './App.css';
import axios from 'axios'

const App=(props)=>{
    const history=useHistory();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        async function fetchme(){
           
            try{
                await axios({
                    method:"get",
                    url: "/check",
                    headers:{
                        "x-token":localStorage.getItem("jwt")
                    }
                });
                history.push("/");
                console.log("In try")
            }catch(e){
                console.log("here in as")
                history.push("/login");
                console.log("In catch")
            }finally{
                setLoading(false);
                console.log("In finally")
            }
        }
        fetchme();
    })
    if(loading) return null;
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
