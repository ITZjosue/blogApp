import { useContext, useEffect, useState } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import './SinglePost.css'
import { getPost } from '../../controllers/Posts'
import { Context } from '../../context/Context'
import { deletePost, updatePost } from '../../controllers/Posts'

const SinglePost = ()=>{

  const PF = 'https://blogapp-bakend.herokuapp.com/images/'

  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post,setPost] = useState({})
  const { user } = useContext(Context)
  const [edit,setEdit] = useState({title:"",desc:""})
  const [updateMode,setUpdateMode] = useState(false)
  useEffect(()=>{
    getPost(path,setPost,setEdit)
  },[path,setPost])

  const handleDelete = ()=>{
    deletePost(path,user.username,navigate)
  }
  const handleUpdate = ()=>{
    updatePost(path,user.username,edit.title,edit.desc,setUpdateMode)
  }
  return(
      <div className="singlePost">
    <div className="singlePostWrapper">
      {post.photo && (
        <img
        className="singlePostImg"
        src={PF+post.photo}
        alt=""
      />
      )}
      {updateMode?<input tyoe='text' value={edit.title} name='title' className='singlePostTitleInput' autoFocus onChange={e=>setEdit({...edit,[e.target.name]:e.target.value})}/>:(
        <h1 className="singlePostTitle">
          {edit.title}
          {(post.username === user?.username) && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
      )

      }
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            <Link className="link" to={`/?username=${post.username}`}>
              {post.username}
            </Link>
          </b>
        </span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      {updateMode?<textarea className='singlePostDescInput' name='desc' value={edit.desc} onChange={e=>setEdit({...edit,[e.target.name]:e.target.value})}/>:(
        <p className="singlePostDesc">
          {edit.desc}
        </p>
      )}
      {updateMode && <button className='singlePostButton' onClick={handleUpdate}>Update</button>}
    </div>
  </div>
  )
}
export default SinglePost