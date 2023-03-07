import React,{useState} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../Redux'
import './Signup.css'

const Signup = (props) => {
	const [username, setusername] = useState('');
	const [password, setpassword] = useState('');
	const [confirmpassword, setconfirmpassword] = useState('');

	let handleSubmit =(event)=>{
			event.preventDefault();
			console.log("handlesubmit called");
			let logindata={
			  username:username,
			  password:password
			}
			console.log("logindata",logindata);
			console.log("propstostat",props.loginDetails);
			props.registerUser(logindata);
	}

    const myStyle={
        backgroundImage: 
 "url('Cuelogicmain.jpg')"}


  return (
    <section className="ftco-section">
		{JSON.stringify(props.loginDetails)}
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Sign Up</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img"style={myStyle} >
			      </div>
						<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">Sign Up</h3>
			      		</div>
								<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a href="#1" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
										<a href="#2" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
									</p>
								</div>
			      	</div>
							<form action="#" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Username</label>
			      			<input type="text" className="form-control" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)} required/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
		            </div>
                    <div className="form-group mb-3">
		            	<label className="label" for="password">Confirm Password</label>
		              <input type="password" className="form-control" placeholder="Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} required/>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={handleSubmit}>Sign Up</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	{/* <div className="w-50 text-left">
			            	<label className="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
										</label>
									</div>
									<div className="w-50 text-md-right">
										<a href='#s'>Forgot Password</a>
									</div> */}
		            </div>
		          </form>
		          <p className="text-center">Not a member? <Link data-toggle="tab" to='/Login' >Login</Link></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  )
}
const mapStateToProps = state=>{
	return {
	 loginDetails: state.registerReducer.registeredUser
	}
 }
 const mapDispatchToProps=dispatch=> {
	return {
	  registerUser: (data)=>dispatch(registerUser(data))
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Signup);