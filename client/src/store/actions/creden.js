import {STORE_CRED} from '../actions/types'
import axios from 'axios'
export const login=(data,first)=>async (dispatch)=>{
    
    if(first){
        try {
            const res=await axios.post("/auth/signup",data);
            localStorage.setItem("jwt",res.data.accessToken);
            dispatch({
                type:STORE_CRED,
                payload:res
            })
        } catch (err) {
            console.log(err)
        }
    }
    else{
        try {
            const res=await axios.post("/auth/login",data); 
            localStorage.setItem("jwt",res.data.accessToken);
            dispatch({
                type:STORE_CRED,
                payload:res
            })
        } catch (err) {
            console.log(err)
        }
    }
    
}
// export const login=data=>{
//     console.log(data)
// }