import React from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';
import { use } from 'react';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Login = () => {
  const {signIn} = use(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [error,setError] = useState("");
 
  const handleSignIn = (e) =>{
    e.preventDefault();
    const form =e.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result =>{
       
      console.log(result.user)

       navigate(`${location.state ?location.state:'/'}`)
    })
    .catch(error =>{
      const errorCode = error.code
      setError(errorCode);
    })
  
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>

        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' required className="input" placeholder="Password" />
         
          <div><a className="link link-hover">Forgot password?</a></div>
           {
            error && <p className='text-red-600 text-xs'>{error}</p>
          }
          <button  className="btn btn-neutral mt-4">Login</button>
                  <p className='font-semibold text-sm text-center pt-3'>Don't Have an account?<Link to="/auth/register" className='text-red-500 underline'>Register</Link></p>

        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;