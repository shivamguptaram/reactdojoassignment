import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { useSelector } from 'react-redux';
const ComponentRoute = () => {
  const loggedInUser=useSelector((state)=>{
		console.log("registered user",state.loginReducer);
		return state.loginReducer.LoggedinUser.username
	});
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/SignUp' element={<Signup/>}/>
        {loggedInUser?<Route path='/blog' element={<Blog/>}/>:''}
        <Route path='*' element={<Login/>} />
    </Routes>
  )
}

export default ComponentRoute