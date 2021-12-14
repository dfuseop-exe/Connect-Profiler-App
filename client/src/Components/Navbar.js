import React , {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"

import { UserContext } from '../App';
import '../css/Navbar.css'


export default function Navbar() {
  const {state , dispatch} = useContext(UserContext);

  const contact_handle = {

  }


  const RenderMunu = ()=>{
    if(state){
      return (
        <>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <p>Profile</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={contact_handle}>
                <p>Contact</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
              <p>Logout</p>
              </Link>
            </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
              <Link className="nav-link "  to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <p>Profile</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <p>Contact</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <p>Login</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
              <p>Registration</p>
              </Link>
            </li>
        </>
      )
    }
  }

  return (
    <section className="header-wrapper">
      <nav class="navbar shadow-lg  navbar-expand-lg fixed-top navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Connect <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <RenderMunu/>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

