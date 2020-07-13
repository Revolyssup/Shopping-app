import React,{Component} from 'react'
import {connect} from 'react-redux'
import {emptyCart} from '../../store/actions/cart'


class Checkout extends Component{
    componentDidMount(){
        console.log(this.props.cart)
    }


    render(){

        const orders=this.props.cart.map((orderItem)=>{
            return (
                <div>
                    <span>{orderItem.name}</span>
                    <span>{orderItem.price}</span>
                    <span>{orderItem.photo}</span>
                    <span>{orderItem.quantity}</span>
                </div>
            )
        })
        return(
            <div>
                <div>
                    {orders}
                </div>
               <form>
                   <label for="name">Name:</label>
                  
                   <input name="name" type="text" id="name"></input>
                   <br/>
                   <label for="Contact">Contact:</label>
                   
                   <input name="Contact" type="text" id="Contact"></input>
                   <br/>
                   <label for="Email">Email:</label>
                   
                   <input name="Email" type="text" id="Email"></input>
                   <br/>
               </form>
               <div>
                <button  onClick={this.props.emptyCart}>Buy Now</button>
              </div>
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

