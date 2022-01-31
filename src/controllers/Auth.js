import axios from 'axios'
import { LoginSuccess } from '../context/Actions'
import { LoginFailure } from '../context/Actions'

const mainURL = 'https://blogapp-bakend.herokuapp.com/api/auth'

export const auth = async (data,setError,navigate)=>{
    setError(false)
    try{
        const res = await axios.post(`${mainURL}/register`,data)
        res.data && navigate('/login')
    }catch(err){
        setError(true)
    }
} 
export const login = async (username,password,dispatch)=>{
    try{
        const { data } = await axios.post(`${mainURL}/login`,{username,password})
        dispatch(LoginSuccess(data))
    }catch(err){
        dispatch(LoginFailure())
    }
}

export const updateUser = async (userId,userData,setSuccess,dispatch)=>{
    let res
    try{
        if(userData.password){
           res =  await axios.put(`https://blogapp-bakend.herokuapp.com/api/users/${userId}`,userData)
        }else{
           res = await axios.put(`https://blogapp-bakend.herokuapp.com/api/users/${userId}`,{userId:userData.userId,username:userData.username,email:userData.email,profilePic:userData.profilePic})
        }
        setSuccess(true)
        dispatch({type:"UPDATE_SUCCESS",payload:res.data})
    }catch(err){
        dispatch({type:"UPDATE_FAILURE"})
    }
}

export const uploadProfilePic = async (formData) =>{
    try{
        await axios.post(`https://blogapp-bakend.herokuapp.com/api/upload`,formData)
    }catch(err){
        console.log(err)
    }
}