import React, { useEffect, useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading.js';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [userAuth] = useAuthState(auth); 


  const navigate = useNavigate(); 
  const location = useLocation(); 
  let from = location.state?.from?.pathname || "/";

  if(userAuth || user || gUser) {
    navigate(from, { replace: true });
  }

  if( loading || gLoading) {
    return <Loading></Loading>
  }

  let signInError; 

  if( error || gError) {
    signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
  }

  const onSubmit = data => {
    console.log(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password); 
  }

  // const resetPassword = async()=>{
  //   const email = emailRef.current.value;
  //   if(email) {
  //     await sendPasswordResetEmail(email);
  //     toast('Send email'); 
  //   }
  //   else {
  //     alert('Please inter your email address'); 
  //   }
  // }

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                name='email'
               
                type="email" 
                placeholder="Your Email" 
                className="input input-bordered w-full max-w-xs" 
                {...register("email", {
                  required: {
                    value: true, 
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide valid email' // JS only: <p>error message</p> TS only support string
                  }
                  })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
                {/* <a onClick={resetPassword} className="link link-accent" >Forgot Password?</a> */}
              </label>
              <input 
                type="password" 
                placeholder="Your password" 
               className="input input-bordered w-full max-w-xs" 
                {...register("password", {
                  required: {
                    value: true, 
                    message: 'Password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer a valid Email' // JS only: <p>error message</p> TS only support string
                  }
                  })}
              />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input type="submit" value="Login" className='btn w-full max-w-xs text-white' />

          </form>
          <p className=''><small>New User?<Link className='text-primary' to="/signup"> Create New Account</Link></small></p>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;