//importing both reducers
import cartReducer from './cart'
import productsReducer from './products'
import credReducer from './cred'
import { combineReducers } from 'redux'

const  rootReducer=combineReducers(
    {
        cart:cartReducer,
        products:productsReducer,
        cred:credReducer
        
    }
)

export default rootReducer