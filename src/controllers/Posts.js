import axios from 'axios'

const mainUrl = 'https://blogapp-bakend.herokuapp.com/api'

export const fetchPosts = async (setPost,search)=>{
    const { data } = await axios.get(`${mainUrl}/posts`+search)
    setPost(data)
}
export const getPost = async (path,setPost,setEdit)=>{
    const { data } = await axios.get(`${mainUrl}/posts/${path}`)
    setPost(data)
    setEdit({title:data.title,desc:data.desc})
}
export const sendPost = async (post,navigate)=>{
    try{
        const { data } = await axios.post(`${mainUrl}/posts`,post)
        navigate('/post/'+data._id)
    }catch(err){
        console.log(err)
    }
}
export const uploadPhoto = async (formData)=>{
    try{
        await axios.post(`${mainUrl}/upload`,formData)
    }catch(err){
        console.log(err)
    }
}

export const deletePost = async (postId,username,navigate)=>{
    try{
        await axios.delete(`${mainUrl}/posts/${postId}`,{data:{username}})
        navigate('/')
    }catch(err){
        console.log(err.message)
    }
}

export const updatePost = async (postId,username,title,desc,setUpdateMode) => {
    try{
        await axios.put(`${mainUrl}/posts/${postId}`,{username,title,desc})
        setUpdateMode(false)
    }catch(err){
        console.log(err)
    }
}