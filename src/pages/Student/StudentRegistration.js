import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import registration from '../../assets/images/registration.jpg'; 
import { toast } from 'react-toastify';

const StudentRegistration = () => {
  const [user, loading, error] = useAuthState(auth); 
  
  const handleReview = event =>{
    event.preventDefault();  

    const review = {
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
      address: event.target.address.value,
      birthday: event.target.birthday.value
    }
    console.log(review);
    fetch('http://localhost:5000/student', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        toast.success('Successfully completed Review')
      }
      else {
        toast.error('Some error in your Review'); 
      }
    })
    event.target.reset();
  }

  return (
    <div className=''>
      <h3 className='text-4xl text-success text-center mt-6'>Student Registration</h3>
      <div className="hero ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src={registration} alt='' className="max-w-sm rounded-lg" />
          <div>
            <div className="card w-96 bg-base-100 mx-auto">
              <div className="card-body">
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center'>
                  <input type="text" name='name' placeholder='Full Name' className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="text" name='email' placeholder='Email' className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="text" name='number' placeholder='Phone Number' className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="text" name='address' placeholder='Address' className="input input-bordered input-secondary w-full max-w-xs" />
                  <input type="date" name='birthday' placeholder='date of birth' className="input input-bordered input-secondary w-full max-w-xs" />
                  {/* <textarea placeholder='Type Your Review...'  name="address"  className=" w-full  textarea textarea-bordered" ></textarea> */}
                  <input type="submit" value="Registration" className="btn btn-secondary btn-sm" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;