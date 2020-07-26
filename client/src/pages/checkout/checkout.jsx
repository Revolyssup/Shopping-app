import React,{Component} from 'react'
import axios from "axios"
import {connect} from 'react-redux'
import {emptyCart} from '../../store/actions/cart'
import BuySomething from '../../ui/BuySomething/BuySomething'
import Modal from 'react-modal'
import "./checkout.css"

const customStyles = {
    content: {
      backgroundColor: "#fff",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
class Checkout extends Component{
   
    componentDidMount(){
        console.log(this.props.cart)
    }
    state={
        name:"you",
        email:"",
        address:"",
        phone:""
    }

    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    
  
    emptycart=(e)=>{
        axios.post('/api/orders',{...this.state, orders:this.props.cart}).then((res)=>console.log(res))
        console.log(this.state)
        this.props.emptyCart();
       
    }
   
   
 
    render(){

        if(!this.props.cart.length) return <BuySomething />

        const orders=this.props.cart.map((orderItem)=>{
            return (
             
                       
                            <tr>
                                 <td>{orderItem.name}</td>
                                 <td>{orderItem.price}</td>
                                <td>{orderItem.quantity}</td>
                            </tr>
               
              
            )
        })
        return(
            <div>
                <div>
                <h1 className="Checkout-Title">Your Order</h1>
                    <table className="table">
                    <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>quantity</td>
                            </tr>
                            


                        </thead>
                        <tbody>
                            {orders}
                        </tbody>
                    </table>
                    
                </div>
               <form className="Checkout-Wrapper">
               <h1 className="Checkout-Title">Checkout</h1>
                  <input type="text" className="Checkout-Input" name="name" placeholder="Enter Name" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="email" placeholder="Enter Email" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="address" placeholder="Enter Address" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="phone" placeholder="Enter Contact no." onChange={this.onChangeHandler}/>
                  <button className="button" onClick={this.emptycart} >Buy Now</button>
               </form>
               
                
              
            </div>
           
        )
    }
}
const mapStateToProps=state=>(
    {
        cart:state.cart
    }
)
    


export default connect(mapStateToProps,{emptyCart})(Checkout)

