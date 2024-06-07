import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Developer from './Developer';
import LoginRoute from './LoginRoute';

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
        </Route>
        
        

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
