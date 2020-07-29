import {STORE_CRED} from '../actions/types'

const initialState={}
const credReducer=(state=initialState,action)=>{
    switch(action.type){
        case STORE_CRED:
            console.log(action.payload)
            return action.payload.data
        default:
            return state

    }

}
export default credReducer