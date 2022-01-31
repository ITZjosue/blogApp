import { LOGIN_START , LOGIN_FAILURE , LOGIN_SUCCESS, LOGOUT } from "./Actions"

const Reducer = (state,{type,payload})=>{
    switch(type){
        case LOGIN_START:
            return {
                user:null,
                isFetching:true,
                error:false
            }
        case LOGIN_FAILURE:
            return {
                user:null,
                isFetching:false,
                error:true
            }
        case LOGIN_SUCCESS:
            return{
                user:payload,
                isFetching:false,
                error:false
            }
        case LOGOUT:
            return{
                user:null,
                isFetching:false,
                error:false
            }
        case "UPDATE_START":
            return {
                ...state,
                isFetching:true
            }
        case "UPDATE_FAILURE":
            return {
                user:state.user,
                isFetching:false,
                error:true
            }
        case "UPDATE_SUCCESS":
            return{
                user:payload,
                isFetching:false,
                error:false
            }
        default:
            return state
    }
}
export default Reducer