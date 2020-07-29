import React from 'react'
import { useState } from 'react'
import {login} from '../../store/actions/creden'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'


const Login =props=>{
    let history=useHistory()
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [address,setAddress]=useState(null)
    const [phone,setPhone]=useState(null)
    const [password,setPassword]=useState(null)
 
    const onChangeName=(e)=>{
        console.log('changed')
        setName(e.target.value)
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangeAddress=(e)=>{
        setAddress(e.target.value)
    }

    const onChangePhone=(e)=>{
        setPhone(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onsubmitSignup= async (e)=>{
       e.preventDefault()
       const cred={
        'name': name,
        'email': email,
        'address': address,
        'phone': phone,
        'password': password
    }
     await props.login(cred,true)
     history.push('/')      
     
    }

    const onsubmitLogin=async (e)=>{
        e.preventDefault()
       const cred={
        'name':name,
        'password':password
       } 
       await props.login(cred,false)
       history.push('/')
    }

        return(
            <div className="container">
                <div className="login">
                    <h1>Login</h1>
                    <form>
                        <input  placeholder="Enter Name" type="text" onChange={onChangeName}></input>
                        <input  placeholder="Enter password" type="password" onChange={onChangePassword}></input>
                        <button className="button" onClick={onsubmitLogin}></button>
                    </form>
                </div>
                <div className="signup">
                <h1>Signup</h1>
                <form>
                <input placeholder="Enter name" type="text" onChange={onChangeName}></input>
                <input placeholder="Enter Email-id" type="text" onChange={onChangeEmail}></input>
                <input placeholder="Enter Address" type="text"  onChange={()=>onChangeAddress}></input>
                <input placeholder="Enter phone number" type="text"  onChange={onChangePhone}></input>
                <input placeholder="Enter Password" type="password"  onChange={onChangePassword}></input>
                <button className="button" onClick={onsubmitSignup}></button>
                </form>
                </div>
            </div>
        )
    
}



export default connect(null,{login})(Login)
