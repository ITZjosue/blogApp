import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import { uploadPhoto, sendPost } from '../../controllers/Posts'
import { useNavigate } from 'react-router-dom'
import './Write.css'

const Write = ()=>{
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const [post,setPost] = useState({
    title:"",
    desc:"",
    username:user.username,
  })
  const [file,setFile] = useState(null)

  const handleSubmit = async ()=>{
    const newPost = {...post}
    if(file){
      const formData =new FormData()
      const fileName = Date.now()+file.name
      formData.append("name",fileName)
      formData.append("file",file)
      newPost.photo = fileName
      await uploadPhoto(formData)
    }
    sendPost(newPost,navigate)
  }
    return(
        <div className="write">
        {file && (
          <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
        )}
      <form className="writeForm" onSubmit={e=>e.preventDefault()}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
            id="fileInput" 
            type="file" 
            onChange={e=>setFile(e.target.files[0])}
            style={{ display: "none" }} 
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name='title'
            onChange={e=>setPost({...post,[e.target.name]:e.target.value})}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name='desc'
            onChange={e=>setPost({...post,[e.target.name]:e.target.value})}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>
    )
}
export default Write