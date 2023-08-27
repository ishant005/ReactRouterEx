import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import { BrowserRouter,Route, Routes,Navigate} from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Post from "./Pages/Post";
import Lost from "./Pages/Lost";

function App() {
  const[login,setLogin]=useState(false);

  return (
    <BrowserRouter>
     <div className='App'>
      <Header/>
    

    <button onClick={()=>setLogin(!login)}>
    {login?"log out":"login"}
    </button>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*'
     element={<Navigate to="/" replace/>}
     />

    <Route path="*" element={<NotFound/>}/>
    <Route path="/post/:id" element={<Post/>}/>
    <Route path="/lost"
    //  element={<Lost/>}
     element={<Lost login={login}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App;
