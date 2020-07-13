//connected component as addtocart action will be dispatched through here
import React from 'react'

//importing product component
import Product from '../product/product'

import PropTypes from 'prop-types'
import {addToCart} from '../../store/actions/cart'
import { connect } from 'react-redux'
const Products=props=>{
    const productlist= props.products.map((product,i)=>{
        return <Product
        key={product._id}
        {...product}
        addToCart={()=>props.addToCart(product,i)}/>
    })
    
    return(
        <div className="Products-container">
                <div>I am in homepage</div>
                {productlist}
            
        </div>
    )
}

Products.propTypes={
    products:PropTypes.array.isRequired,
    addToCart:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    cart: state.cart
  });
export default connect(mapStateToProps,{addToCart})(Products)