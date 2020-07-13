/*This reducer function manages the state of products on main page.
And all actions for updating the  state to fetched products are dispatched to this reducer. */

import { FETCH_PRODUCTS } from '../actions/types'

const initialstate=[];
const  productsReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            console.log(action.payload)
            return action.payload;
        default:
            return state;

    }
}

export default  productsReducer;