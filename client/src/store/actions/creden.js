import {STORE_CRED} from '../actions/types'
import axios from 'axios'
export const storeCred=()=>async dispatch=>{
    try {
        const res=await axios.get("/api/verify")
        console.log(res)
        dispatch({
            type:STORE_CRED,
            payload:res.data.cred
        })
    } catch (err) {
        console.log(err)
    }
}