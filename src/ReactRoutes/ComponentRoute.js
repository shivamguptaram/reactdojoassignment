import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
const ComponentRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/SignUp' element={<Signup/>}/>
        <Route path='/blog' element={<Blog/>}/>
    </Routes>
  )
}

export default ComponentRoute