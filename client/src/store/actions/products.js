import {FETCH_PRODUCTS} from '../actions/types'
import axios from 'axios'
export const fetchProducts=()=> async dispatch=>{
    try {
        const res= await axios.get("/api/products ");
        console.log(res.data.products)
        dispatch({
            type:FETCH_PRODUCTS,
            payload:res.data.products
        })
    } catch (error) {   
        console.error(error)   
    }
    
}