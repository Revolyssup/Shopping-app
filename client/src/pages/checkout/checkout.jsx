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
        console.log(this.props.cart)
        if(this.props.cred.orders){
            // console.log(localStorage.getItem("jwt"));
            axios.post('/api/orders',{...this.props.cred,orders:[...this.props.cart]},{headers:{
                "x-token":localStorage.getItem("jwt")
            }})
        }   
        //for users fetched from mongodb
        else{
            axios.post('/api/orders',{...this.props.cred,orders:[...this.props.cart]},{headers:{
                "x-token":localStorage.getItem("jwt")
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

