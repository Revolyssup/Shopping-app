import React,{Component} from 'react';
import Routes from './routes/routes'
import Navbar from './ui/navbar/navbar'
import Login from './pages/auth/login'
import { useHistory } from "react-router-dom";
import './App.css';


const App=(props)=>{

        const loadLogin=true;
        if(loadLogin) return(<Login/>)
        return(

            <div className="App">
                <Navbar />
                <Routes />
            </div>
        )
    }

export default App;
