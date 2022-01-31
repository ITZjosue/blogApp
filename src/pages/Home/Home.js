import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
import { fetchPosts } from '../../controllers/Posts'
import { useLocation } from 'react-router-dom'

const Home = ()=>{
    const [posts,setPosts] = useState([])
    const { search } = useLocation()


    useEffect(()=>{
        fetchPosts(setPosts,search)
    },[setPosts,search])

    return(
        <>
            <Header/>
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar/>
            </div>
        </>
    )
}
export default Home