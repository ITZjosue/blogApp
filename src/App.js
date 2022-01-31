import TopBar from "./components/TopBar/TopBar"
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Write from "./pages/Write/Write"
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Settings from "./pages/Settings/Settings"
import { useContext } from "react"
import { Context } from "./context/Context"
const App = ()=>{
    const {user} = useContext(Context)
    return(
        <Router>
            <TopBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/post' element={<Home/>}/>
                <Route path='/register' element={user?<Home/>:<Register/>}/>
                <Route path='/login' element={user?<Home/>:<Login/>}/>
                <Route path='/post/:id' element={<Single/>}/>
                <Route path='/write' element={user?<Write/>:<Login/>}/>
                <Route path='/settings' element={user?<Settings/>:<Home/>}/>
            </Routes>
        </Router>
    )
}
export default App