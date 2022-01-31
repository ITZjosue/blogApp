import SinglePost from "../../components/SinglePost/SinglePost"
import Sidebar from '../../components/Sidebar/Sidebar'
import './Single.css'
const Single = ()=>{
    return(
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single