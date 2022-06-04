import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate(); 

  let signInError; 

  if( loading || gLoading || updating) {
    return <Loading></Loading>
  }

  if(user || gUser) {
    navigate('/');
  }

  if( error || gError || updateError) {
    signInError = <p  className='text-red-500'>{error?.message || gError?.message}</p>
  }

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password); 
    await updateProfile({ displayName: data.name });
  }

  return (
    <div  className='flex justify-center items-center h-screen'>
      <div  className="card w-96 bg-base-100 shadow-xl">
        <div  className="card-body ">
          <h2  className="text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="name" 
                placeholder="Your Name" 
                className="input input-bordered w-full max-w-xs" 
                {...register("name", {
                  required: {
                    value: true, 
                    message: 'Name is Required'
                  }
                  })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
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
            <input type="submit" value="SignUp"  className='btn w-full max-w-xs text-white' />

          </form>
          <p className=''><small>Already have an account?<Link  className='text-primary' to="/login"> Please login</Link></small></p>

          <div  className="divider">OR</div>
          <button onClick={() => signInWithGoogle()}  className='btn btn-outline'>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;