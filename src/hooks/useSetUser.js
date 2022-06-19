import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useSetUser = (user) => {
  const [admin, setAdmin] = useState(''); 
  useEffect(()=>{
    const email = user?.user?.email;
    const currentUser = {email:email};
    console.log(currentUser);
    if(email) {
      fetch(`https://cse-hostel-management.herokuapp.com/user/${email}`, {
        method: 'PUT', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setAdmin(data); 
        toast.success("User Successfully login"); 
      })
    }
  },[user]); 
  return [admin];
};

export default useSetUser;