import {FETCH_PRODUCTS} from '../actions/types'
import axios from 'axios'
export const fetchProducts=(at)=> async dispatch=>{
    try {
        console.log(at)
        const res= await axios.get("/api/products",{"headers":{
            "X-token":at
        }});
        console.log(res.data.products)
        dispatch({
            type:FETCH_PRODUCTS,
            payload:res.data.products
        })
    } catch (error) {   
        console.error(error)   
    }
    
}