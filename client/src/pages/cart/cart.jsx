//connected component giving action to its child cardItem and accessing cartState

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {addToCart,deleteFromCart,deleteWholeItem} from '../../store/actions/cart'

import "./cart.css"
import { Link } from 'react-router-dom'
import BuySomething from '../../ui/BuySomething/BuySomething'
import CartItem from '../../components/cart/CartItem'

import {connect} from 'react-redux'

//To sort the products array by ID
const sort=item=>{
    return item.sort((a,b)=>a._id<b._id)
}

//To calculate total price
const totalPrice=cart=>( cart.reduce((accum,product)=>(accum+(product.price*product.quantity)),0));

class Cart extends Component{
 
    render(){
        
        if(!this.props.cart.length) return <BuySomething />
        const cartItems=sort(this.props.cart).map((item,i)=>(
            <CartItem 
            key={i}
            {...item}
            addItem={()=>this.props.addToCart(item,i)}
            removeItem={()=>this.props.deleteFromCart(item)}
            removeWholeItem={()=>this.props.deleteWholeItem(item)}
            />
        ))


        // if(!cartItems.length) return <BuySomething/>

        return(
            <div>
                <h1 className="My-Cart-Title">My Cart</h1>
                
                <div className="Cart-Products-Wrapper">
                    <table className="Cart-Table">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                            <tr>
                            <td
                                style={{
                                    verticalAlign: 0,
                                    paddingTop: "1rem",
                                    fontWeight: "bold"
                                }}
                            >
                            Total
                            </td>
                                <td />
                                <td />
                                <td>
                                     <p className="Total-Price" >${totalPrice(this.props.cart)}</p>
                                     <Link to="/checkout"
                                     className="Checkout-Button-Text">
                                     
                                         <div  className="Checkout-Button">
                                             Checkout
                                         </div>
                                     </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


Cart.propTypes={
    addToCart:PropTypes.func.isRequired,
    deleteFromCart:PropTypes.func.isRequired,
   
}
const mapStateToProps=state=>({
    cart:state.cart

   
})

export default connect(mapStateToProps,{addToCart,deleteFromCart,deleteWholeItem})(Cart)
