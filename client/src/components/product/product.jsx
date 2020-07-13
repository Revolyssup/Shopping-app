import React from 'react'

const Product=props=>{
    return(
        <div className="Product-wrapper">
            <div className="Product">
                <div className="Product-image">

                </div> 
                <div className="Product-name">
                    {props.name}
                </div>
                <div className="Product-details">
                        <small className="price">${props.price}</small>
                        <button onClick={props.addToCart} className="button">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product