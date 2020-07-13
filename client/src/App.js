import React,{Component} from 'react';
import Routes from './routes/routes'
import Navbar from './ui/navbar/navbar'
import './App.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navbar />
                <Routes />
            </div>
        )
    }
}
export default App;
