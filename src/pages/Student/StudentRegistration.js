import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import registration from '../../assets/images/registration3.jpg'; 
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
    fetch('https://cse-hostel-management.herokuapp.com/student', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        toast.success('Successfully completed Registration')
      }
      else {
        toast.error('Some error in your Registration'); 
      }
    })
    event.target.reset();
  }

  return (
    <div className='h-screen ' id='registration'>
      <h3 className='text-3xl text-success text-center pt-10 m-5'>Student Registration</h3>
      <div className="">
        <div className="hero-content flex-col md:flex-row-reverse mx-auto">
          <img src={registration} alt='' className="max-w-sm rounded-lg" />
          <div>
            <div className="card w-96 bg-base-100 mx-auto">
              <div className="card-body">
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-10 '>
                  <div className='form-group flex items-center'>
                    <label htmlFor='name'>
                      <i class="fa-solid fa-user "></i>
                    </label>
                    <input type="text" name='name' placeholder='Full Name' className="form__field w-full max-w-md" />
                  </div>
                  <div className='form-group flex items-center'>
                    <label htmlFor='name'>
                      <i class="fa-solid fa-envelope"></i>
                    </label>
                    <input type="text" name='email' placeholder='Email' className="form__field w-full max-w-md" />
                  </div>
                  <div className='form-group flex items-center'>
                    <label htmlFor='name'>
                      <i class="fa-solid fa-phone-flip"></i>
                    </label>
                    <input type="text" name='number' placeholder='Phone Number' className="form__field w-full max-w-md" />
                  </div>
                  <div className='form-group flex items-center'>
                    <label htmlFor='name'>
                      <i class="fa-solid fa-address-book"></i>
                    </label>
                    <input type="text" name='address' placeholder='Address' className="form__field w-full max-w-md" />
                  </div>
                  <div className='form-group flex items-center'>
                    <label htmlFor='name'>
                      <i class="fa-solid fa-calendar-days"></i>
                    </label>
                    <input type="date" name='birthday' placeholder='date of birth' className="form__field w-full max-w-md" />
                  </div>
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