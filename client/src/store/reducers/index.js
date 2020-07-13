//importing both reducers
import cartReducer from './cart'
import productsReducer from './products'

import { combineReducers } from 'redux'

const  rootReducer=combineReducers(
    {
        cart:cartReducer,
        products:productsReducer
        
    }
)

export default rootReducer