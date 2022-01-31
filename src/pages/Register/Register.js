import { useState } from 'react'
import { auth } from '../../controllers/Auth'
import { useNavigate } from 'react-router-dom'
import './Register.css'
const Register = ()=>{
    const initialState = {username:'',email:'',password:''}
    const [data,setData] = useState(initialState)
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = ()=>auth(data,setError,navigate)
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={e=>e.preventDefault()}>
                <label>Username</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your username..."
                    name='username' 
                    onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                    value={data.username}
                />
                <label>Email</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your email..." 
                    name='email'
                    onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                    value={data.email}
                />
                <label>Password</label>
                <input 
                    className="registerInput" 
                    type="password" 
                    placeholder="Enter your password..."
                    name='password'
                    onChange={e=>setData({...data,[e.target.name]:e.target.value})}
                    value={data.password} 
                />
                <button onClick={handleSubmit} className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
            {error && <span style={{color:"red"}}>Something went wrong</span>}
        </div>
    )
}
export default Register