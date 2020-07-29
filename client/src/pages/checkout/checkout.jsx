import React,{Component} from 'react'
import axios from "axios"
import {connect} from 'react-redux'
import {emptyCart} from '../../store/actions/cart'
import BuySomething from '../../ui/BuySomething/BuySomething'
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

    
  
    emptycart=(e)=>{
        
        //for first time users
        if(this.props.cred.orders){
            axios.post('/api/orders',{...this.props.cred,orders:[...this.props.cred.orders,...this.props.cart]},{headers:{
                'x-token': this.props.cred.accessToken
            }})
        }
        //for users fetched from mongodb
        else{
            axios.post('/api/orders',{...this.props.cred._doc.orders,orders:[...this.props.cred._doc.orders,...this.props.cart]},{headers:{
                'x-token': this.props.cred.accessToken
            }})
        }
        
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
               {/* <form className="Checkout-Wrapper">
               <h1 className="Checkout-Title">Checkout</h1>
                  <input type="text" className="Checkout-Input" name="name" placeholder="Enter Name" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="email" placeholder="Enter Email" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="address" placeholder="Enter Address" onChange={this.onChangeHandler}/>
                  <input type="text" className="Checkout-Input" name="phone" placeholder="Enter Contact no." onChange={this.onChangeHandler}/>
                  
               </form> */}
               
               <button className="button" onClick={this.emptycart} >Buy Now</button>
              
            </div>
           
        )
    }
}
const mapStateToProps=state=>(
    {
        cart:state.cart,
        cred:state.cred
    }
)
    


export default connect(mapStateToProps,{emptyCart})(Checkout)

