import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Home from "./pages/Home.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import Dashboard from "./pages/Dashboard.js"
import PrivateRoute from "./Components/PrivateRoute";
import { useState } from "react";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="w-screen max-h-max bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setIsLoggedIn={setLoggedIn}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
    </div>
  )
  
}

export default App;
