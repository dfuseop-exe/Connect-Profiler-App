import React , {useContext} from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { UserContext } from '../App';
import '../css/Navbar.css'


export default function Navbar() {
  const {state , dispatch} = useContext(UserContext);

  const RenderMunu = ()=>{
    if(state){
      return (
        <>
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
              Logout
              </Link>
            </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
              Registration
              </Link>
            </li>
        </>
      )
    }
  }

  return (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light ">
      <div className="container-fluid">
      <a class="navbar-brand" href="#"><h3 style={{fontFamily : "Nunito" , color  : "#0d6efd"}}  >Connect</h3></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMunu/>

          </ul>
        </div>
      </div>
    </nav>
  );
}
