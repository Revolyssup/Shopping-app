import React,{Fragment} from 'react'
import PropTypes from 'prop-types'


const CartItem=props=>{
    return(
        <Fragment>
            <tr>
                <td>
                  <image src={props.photo}></image>
                </td>
                <td>{props.name}</td>
                <td>
                    <button className="button-quant" onClick={props.addItem}>
                        +
                    </button>
                    <span>
                    {props.quantity}
                    <button className="button-quant" onClick={props.removeItem}> 
                        -
                    </button>
                    </span>
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