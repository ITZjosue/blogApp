import { useContext, useRef } from 'react'
import { Context } from '../../context/Context'
import { login } from '../../controllers/Auth'
import { LoginStart } from '../../context/Actions'
import './Login.css'

const Login = ()=>{

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch } = useContext(Context)
  const handleSubmit = ()=>{
    dispatch(LoginStart())
    login(userRef.current.value,passwordRef.current.value,dispatch)
  }
  return(
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={e=>e.preventDefault()} >
        <label>Username</label>
        <input 
          className="loginInput" 
          type="text" 
          placeholder="Enter your username..."
          ref={userRef} 
        />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password" 
          placeholder="Enter your password..."
          ref={passwordRef} 
        />
        <button className="loginButton" type='submit' onClick={handleSubmit}>Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
    )
}
export default Login