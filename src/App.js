import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/Login/RequireAuth'; 
import Footer from './pages/Shared/Footer';
import StudentRegistration from './pages/Student/StudentRegistration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentComplain from './pages/Student/StudentComplain';
import StudentNotification from './pages/Student/StudentNotification';
import ViewStudent from './pages/Admin/ViewStudent';
import { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>[
      setLoading(false)
    ],3000) 
  },[])
  
  return (
    <div className='App'>
      {
       loading ? 
      <div className='loading'>
      <FadeLoader color={'#7ED321'} loading={loading}   size={140} />
      </div>
      :
      <>
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Routes >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/registration' element={
              <RequireAuth>
                <StudentRegistration/>
              </RequireAuth>
            }></Route>
            <Route path='/student' element={
              <RequireAuth>
                <ViewStudent/>
              </RequireAuth>
            }></Route>
            <Route path='/complaint' element={
              <RequireAuth>
                <StudentComplain/>
              </RequireAuth>
            }></Route>
            <Route path='/notification' element={
              <RequireAuth>
                <StudentNotification/>
              </RequireAuth>
            }></Route>
            {/* <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            </Route> */}
          </Routes>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </>
      }
    </div>
  );
}

export default App;
