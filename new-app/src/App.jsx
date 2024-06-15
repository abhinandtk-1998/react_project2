import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Developer from './developer_module/Developer';
import LoginRoute from './LoginRoute';
import Teamlead from './teamlead_module/Teamlead';
import Admin from './admin_module/Admin';
import Requests from './admin_module/Requests';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element = {<Home />} ></Route>
        <Route path="/login" element= {<Login />} ></Route>
        <Route path="/signup" element= {<Signup />} ></Route>

        <Route element={<LoginRoute />}>
        <Route path="/developer" element= {<Developer />} ></Route>
        <Route path="/teamlead" element= {<Teamlead />} ></Route>
        <Route path="/admin" element= {<Admin />} ></Route>
        <Route path="/requests" element= {<Requests />} ></Route> 
        <Route path="/teamlead_list" element= {<TLlist />} ></Route> 
        <Route path="/developers_list" element= {<DeveloperList />} ></Route> 
        
        </Route>
        
        

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
