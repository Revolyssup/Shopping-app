/*This reducer function manages the state of cart.
And all actions for updating cart state to reducer are dispatched to this reducer. */


import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_WHOLE_ITEM,EMPTY_CART} from '../actions/types'

const initialstate=[]


//retuns state with the new item added
const addItem=(cart,item)=>{
    console.log('adding item..')
    const temp=[...cart]
    for(let i=0;i<cart.length;i++){
        if(cart[i]._id===item._id){
            //if that item exits increment its quantity by 1;
            temp[i].quantity+=1;
            console.log(cart)
            return temp;
        }
    }
    //if that item doesnt exits,set quantity to 1;
    
    return [...cart,{...item,quantity:1}];
}


//returns state with the given item deleted
const removeItem=(cart,item)=>{
    return (cart.filter((cartItem)=>{
        if(cartItem._id!==item._id) return true;
        if(cartItem.quantity>1){
            cartItem.quantity-=1;
            return true;
        }
        return false;
    }))
    
}

const deleteItem=(cart,item)=>{
    return cart.filter((cartItem)=>(
        cartItem._id!==item._id
    )
    )
}
const  cartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return addItem(state,action.payload);
        case REMOVE_FROM_CART:
            return removeItem(state,action.payload);
        case REMOVE_WHOLE_ITEM:
            return deleteItem(state,action.payload);
        case EMPTY_CART:
            console.log('here')
            return action.payload
        default:
            return state;
    }
}

export default cartReducer
