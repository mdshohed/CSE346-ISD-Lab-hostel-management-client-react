import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ViewStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const url = `https://cse-hostel-management.herokuapp.com/student`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setStudents(data));  
  }, [])
  const handleDelete = (id) =>{
    const url = `https://cse-hostel-management.herokuapp.com/student/${id}`;
    fetch(url,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      const remaining = students.filter(student=>student._id!==id); 
      setStudents(remaining); 
      toast.success('Successfully deleted'); 
    }) 
    
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl m-6 text-secondary'>View Student Details</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student,index)=><tr  class="hover">
                <th>{index+1}</th>
                <th>{student.name}</th>
                <th>{student.email}</th>
                <th>{student.number}</th>
                <th>{student.address}</th>
                <th><button className='btn btn-xs btn-error' onClick={()=>handleDelete(student._id)}>Delete</button></th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudent;