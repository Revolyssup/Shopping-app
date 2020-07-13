import {ADD_TO_CART,REMOVE_WHOLE_ITEM,REMOVE_FROM_CART,EMPTY_CART} from '../actions/types'

export const addToCart=(item,i)=>{
    console.log(item)
    return (
        {
            type: ADD_TO_CART,
            payload:item,
            index:i
        }
    )
}



export const deleteFromCart=(item)=>(
    {
        type: REMOVE_FROM_CART,
        payload:item,
    }
)
export const deleteWholeItem=(item,i)=>(
    {
        type: REMOVE_WHOLE_ITEM,
        payload:item,
      
    }
)
export const emptyCart=()=>(
    {
        type:EMPTY_CART,
        payload:[]
    }
)