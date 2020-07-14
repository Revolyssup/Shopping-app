import React,{Fragment} from 'react'
import "./cart.css"
import PropTypes from 'prop-types'


const CartItem=props=>{
    return(
        <Fragment>
            <tr>
                <td>
                    {" "}
                     <image className="Cart-Item-Photo" src={props.photo}  alt={props.name}></image>
                     {" "}
                </td>
                <td>{props.name}</td>
                <td>
                    <button  onClick={props.addItem} className="Quantity-Button">
                        +
                    </button>
                    <span>
                    {props.quantity}
                    </span>
                    <button  onClick={props.removeItem} className="Quantity-Button"> 
                        -
                    </button>
                    </td>
                <td>{props.price}</td>
                <td className="fa fa-times" onClick={props.removeWholeItem} style={{ color: 'red', cursor: 'pointer' }}> DELETE :(</td>
            </tr>
        </Fragment>
    )
}

CartItem.propTypes={
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}


export default CartItem