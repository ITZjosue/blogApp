import './Settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import img from '../../images/default.png'
import { updateUser, uploadProfilePic } from '../../controllers/Auth'
const Settings = ()=>{

  const PF = 'https://blogapp-bakend.herokuapp.com/images/'

  const [file,setFile] = useState(null)
  const { user, dispatch } = useContext(Context)
  const [userData,setUserData] = useState({userId:user._id,username:user.username,email:user.email,password:''})
  const [success,setSuccess] = useState(false)
  
  const handleUpdate = async ()=>{
    dispatch({type:"UPDATE_START"})
    const updatedUser = {...userData}
    if(file){
      const formData = new FormData()
      const fileName = Date.now() + file.name
      formData.append("name",fileName)
      formData.append("file",file)
      updatedUser.profilePic = fileName
      await uploadProfilePic(formData)
    }
    updateUser(user._id,updatedUser,setSuccess,dispatch)
  }

  return(
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={e=>e.preventDefault()}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {file?
              <img 
                src={URL.createObjectURL(file)} 
                alt=''
              />
              :
              <img
              src={user.profilePic?`${PF}${user.profilePic}`:img}
              alt=""
            />}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={e=>setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input 
            type="text"  
            name="username" 
            onChange={e=>setUserData({...userData,[e.target.name]:e.target.value})}
            value={userData.username}
          />
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            onChange={e=>setUserData({...userData,[e.target.name]:e.target.value})}
            value={userData.email} 
          />
          <label>Password</label>
          <input type="password" placeholder="New Password" name="password" onChange={e=>setUserData({...userData,[e.target.name]:e.target.value})}/>
          <button className="settingsSubmitButton" type="submit" onClick={handleUpdate}>
            Update
          </button>
        </form>
        {success && <p style={{color:"lightgreen"}}>User successfuly updated!</p>}
      </div>
      <Sidebar />
    </div>
  )
}
export default Settings