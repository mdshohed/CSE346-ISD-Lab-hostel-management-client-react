import React from 'react';
import './Student.css'
import { toast } from 'react-toastify';

const StudentComplain = () => {
  
  const handleComplaint = (event) =>{
    event.preventDefault();  

    const complaint = {
      complainTitle: event.target.title.value,
      complainText: event.target.text.value,
    }
    console.log(complaint);
    fetch('https://cse-hostel-management.herokuapp.com/complaint', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(complaint)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        toast.success('Successfully Complaint submitted')
      }
      else {
        toast.error('Some error in your submission'); 
      }
    })
    event.target.reset();
  }
  return (
    <div className=' ' id='complaint'>
      <h3 className='text-3xl text-success text-center p-10 '>Student Complaint</h3>
      <div style={{width: '400px'}} className=" bg-base-100 mx-auto p-5 rounded">
        <form onSubmit={handleComplaint} className='grid grid-cols-1 gap-10 '>
        <div className='form-group'>
          <label htmlFor='title'>
            <p className='text-left'>Compliant Title</p>
          </label>
          <input required type="text" name='title' placeholder='Complaint Title' className="text-bold input input-bordered w-full " />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>
          <p className='text-left'>Compliant Text</p>
          </label>
          <textarea required type="text" name='text' placeholder='text...' className="textarea textarea-bordered w-full max-w-md" />
        </div>
        <input type="submit" value="Submit" className="btn btn-secondary btn-sm" />
        </form>
      </div>
    </div>
  );
};

export default StudentComplain;