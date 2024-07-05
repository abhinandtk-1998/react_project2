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
import DeveloperList from './admin_module/DeveloperList'; 
import TLlist from './admin_module/TLlist';
import Projects from './admin_module/Projects';
import Projects_tl from './teamlead_module/Projects_tl';
import Projects_dev from './developer_module/Projects_dev';
import Edit_dev_profile from './developer_module/Edit_dev_profile';
import Change_dev_password from './developer_module/Change_dev_password';

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
          <Route path="/projects" element= {<Projects />} ></Route> 

          <Route path="/projects_tl" element= {<Projects_tl />} ></Route>

          <Route path="/projects_dev" element= {<Projects_dev />} ></Route>
          <Route path="/edit_dev_profile" element={<Edit_dev_profile />} ></Route>
          <Route path="/change_dev_password" element={<Change_dev_password />} ></Route>
        
        </Route>
        
        

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
