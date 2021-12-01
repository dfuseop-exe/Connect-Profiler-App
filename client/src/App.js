import React, { createContext , useReducer } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";
import "./App.css";
import { initialState , reducer } from "./reducer/UseReducer";


//1. Context api

export const UserContext = createContext();

export default function App() {

  
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="app">
      <UserContext.Provider value={{state , dispatch}}>
      <Router>
        <Navbar />
        <div className='container '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
      </UserContext.Provider>
    </div>
  );
}
