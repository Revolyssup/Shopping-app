import React,{Component} from 'react'

class Login extends Component{
    componentDidMount(){

    }

    state={
        name:'',
        email:"",
        address:"",
        phone:""
    }
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onLogin
    render(){
        return(
            <div className="container">
                <div className="login">
                    <form>
                        <input></input>
                    </form>
                </div>
                <div className="signup">
                <form>
                        
                </form>
                </div>
            </div>
        )
    }
}

export default Login