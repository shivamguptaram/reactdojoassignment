import React,{useState} from 'react'
import './Login.css';
import {useSelector,connect} from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
import {loginUser} from '../Redux/login/loginActions'
const Login = (props) => {
	const [username, setusername] = useState('');
	const [password, setpassword] = useState('');
	const [noMatch, setnoMatch] = useState(false);
	const navigate = useNavigate();

	const registeredUser=useSelector((state)=>{
		// console.log("registered user",state.registerReducer);
		return state.registerReducer
	});

	let SignIn=(event)=>{
		event.preventDefault();
		// console.log('before if ',props.registeredUser)
		if(props.registeredUser.find((user)=>user.username===username &&user.password===password))
		{
			// console.log("i m here")
			props.logginUser({username:username})
			// window.localStorage.setItem('Login',JSON.stringify({username:username}));
			navigate('/blog');
		}
		else {
			setnoMatch(true);
		}
	}
    const myStyle={
        backgroundImage: 
 "url('Cuelogicmain.jpg')"}
  return (
    <section className="ftco-section">
		{/* <h1>{JSON.stringify(state)}</h1> */}
		<h1>{JSON.stringify(props.loginDetails)}</h1>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Sign In</h2>
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
			      			<h3 className="mb-4">Sign In</h3>
			      		</div>
								{/* <div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a href="#1" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
										<a href="#2" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
									</p>
								</div> */}
			      	</div>
							<form  className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" htmlFor="name">Username</label>
			      			<input type="text" className="form-control" placeholder="Username" value={username} onChange={(e)=>{setusername(e.target.value); setnoMatch(false)}} required/>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" htmlFor="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value);setnoMatch(false)}} required/>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={SignIn}>Sign In</button>
		            </div>
					{noMatch?<span className='invalid-error'>Invaild Username or Password</span>:''}
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	{/* <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
										</label> */}
									</div>
									{/* <div className="w-50 text-md-right">
										<a href='#s'>Forgot Password</a>
									</div> */}
		            </div>
		          </form>
		          <p className="text-center">Not a member? <Link data-toggle="tab" to='/SignUp'>Sign Up </Link></p>
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
	 loginDetails: state.loginReducer.loggedInUser,
	 registeredUser:state.registerReducer.registeredUser
	}
 }
 const mapDispatchToProps=dispatch=> {
	return {
	  logginUser: (data)=>dispatch(loginUser(data))
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login);

// export default Login