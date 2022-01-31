export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT = "LOGOUT"

export const LoginStart = (userCredentials)=>({
    type:LOGIN_START
})
export const LoginSuccess = (user)=>({
    type:LOGIN_SUCCESS,
    payload:user
}) 
export const LoginFailure = ()=>({
    type:LOGIN_FAILURE
})
export const Logout = ()=>({
    type:LOGOUT
})