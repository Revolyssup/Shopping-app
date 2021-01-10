//connected component as it accesses cart to decribe cart in navbar
import React from 'react'
import "./navbar.css"
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

const totalPrice = cart => 
  {
        let ans= cart.reduce(
            (accum, product) => accum + (product.price * product.quantity),
            0
          );
        console.log('ans',ans)
        return ans
            
  };
const Navbar=props=>(
    <nav className="NavBar-Wrapper">
        <div>
            <Link to="/" className="navbutton"><span>Shop</span></Link>
        </div>
        <div>
            <Link to="/cart" className="navbutton">
                
                    <span>
                    <span >{props.cart.length}</span>
                    <i className="fa fa-shopping-bag"></i>
                    <p>Cart: ${totalPrice(props.cart)}</p>
                    </span>

                
            </Link>
        </div>
        <div>
            <Link to="/login" className="navbutton">
            <span>Logout</span>
            </Link>
        </div>

    </nav>
)
const mapStateToProps=state=>(
    {
        cart:state.cart
    }
)
export default connect(mapStateToProps,null)(Navbar)