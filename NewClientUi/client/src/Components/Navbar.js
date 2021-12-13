import React from "react";
import '../Css/Navbar.css'


export default function Navbar() {

  return (
    <section className="header-wrapper ">
      <nav class="navbar navbar-expand-lg fixed-top navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Connect
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
            <li className="nav-item">
              <a className="nav-link "  href="/">
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <p>Profile</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <p>Contact</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <p>Login</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
              <p>Registration</p>
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
