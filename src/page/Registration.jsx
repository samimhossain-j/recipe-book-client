import React from 'react';
import { Link } from 'react-router';
import { use } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';

const Registration = () => {
  const { createUse, setUser, updateUser } = use(AuthContext)
  const [error,setError]=useState("")
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userOtherData } = Object.fromEntries(formData.entries())
     const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if(!passwordRegex.test(password)){
          setError(
            "Password must be at least 6 character long include 1 lowercase, 1 Uppercase and 1 number"
          )
          return;
    }
    // const email = formData.get('email')
    // const password = formData.get('password')
    console.log(email, password,userOtherData)


    createUse(email, password)
      .then(result => {
        updateUser({
          displayName: userOtherData.name,
          photo:userOtherData.photo

        })
          .then(() => {
            setUser({
              ...result.user,displayName: userOtherData.name,
          photo:userOtherData.photo
            })
            navigate('/')
          })
          .catch(error => {
            setUser(result.user)
          })


      })
      .catch(error => {
        console.log(error)
        const errorMessage = error.errorMessage
        alert(errorMessage)
      })
    

  }

  return (
    <div className="hero bg-base-200 min-h-screen">

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body  ">
          <h1 className="text-4xl font-bold">Registration now!</h1>

          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" required className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input name='email' type="email" required className="input" placeholder="Email" />
            <label className="label">Photo-URL</label>
            <input name='photo' type="text" required className="input" placeholder="Photo-URL" />
            <label className="label">Password</label>
            <input name='password' type="password" required className="input" placeholder="Password" />
            {
              error && <p className='text-red-700 text-xs'>{error}</p>
            }
            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4">Registration</button>
            <p className='font-semibold text-sm text-center pt-3'>Have an account?<Link to="/auth/login" className='text-red-500 underline'>Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;