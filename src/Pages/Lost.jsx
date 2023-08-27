
import { useEffect } from "react";
import {Routes,Route} from 'react-router-dom'
import {useMatch, useNavigate} from "react-router-dom";
import EditProfile from "../components/EditProfile";
import ViewProfile from "../components/ViewProfile";

const Lost=({login})=>{
    const history=useNavigate();

    // useEffect(()=>{
    //  window.scroll(0,0)
    // },[])
    useEffect(()=>{
        if(!login){
            history("/about")
        }
    },[login,history])

 
    return(
<>
<h1>Check</h1>
{/* <ul>
    <li>
        <Link to={`${url}/ViewProfile`}>View Profile</Link>
    </li>
    <li>
        <Link to={`${url}/EditProfile`}>EditProfile</Link>
    </li>
</ul> */}

{/* <Routes>
    <Route path="/ViewProfile" element={<ViewProfile/>} />
    <Route path="/EditProfile" element={<EditProfile/>} />
</Routes> */}

</>
    )
}
export default Lost;