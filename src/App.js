import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/Login/RequireAuth'; 

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            
        </Route>
      </Routes>
    </div>
  );
}

export default App;
