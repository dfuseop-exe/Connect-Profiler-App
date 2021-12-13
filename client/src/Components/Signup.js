import React , {useState} from "react";
import "../css/Signup.css";
import signup from "../images/signup.svg";
import { useNavigate } from "react-router-dom";



export default function Signup() {
   const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || res.status === 400 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration SuccessFull");
      console.log("Registration SuccessFull");
      console.log(res.body);
       navigate("/login");
    }
  };

  return (
    <div className="container my-md-5 px-md-5">
      <section className="container sign-main  my-md-5 px-md-5">
        <div className="row my-md-2 signup-container ">
          {/* Left Side Img*/}
          <div className="col-sm-12 my-auto box-1 col-md-5 ">
            <img src={signup} alt="SignUp Image" />
            
          </div>

          {/* Right Side Form */}
          <div className="col-sm-12 box-2 col-md-7">
            <div className="row sign-right">
              <div className="col-12">
                <h2>
                  Create New{" "}
                  <span style={{ color: "#0d6efd", fontWeight: "bolder" }}>
                    Account
                  </span>
                </h2>
              </div>

              {/* Form */}
              <form method="POST">
                <div class="form-row">
                  <input
                    type="text"
                    required
                    value={user.name}
                    onChange={handleInputs}
                    name="name"
                  />
                  <span>Your Name</span>
                </div>
                <div class="form-row">
                  <input
                    type="text"
                    required
                    value={user.email}
                    onChange={handleInputs}
                    name="email"
                  />
                  <span>Your Email</span>
                </div>
                <div class="form-row">
                  <input
                    type="text"
                    required
                    name="phone"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                  <span>Mobile Number</span>
                </div>
                <div class="form-row">
                  <input
                    type="text"
                    required
                    value={user.work}
                    onChange={handleInputs}
                    name="work"
                  />
                  <span>Your Profession</span>
                </div>
                <div class="form-row">
                  <input
                    type="password"
                    required
                    value={user.password}
                    onChange={handleInputs}
                    name="password"
                  />
                  <span>Password</span>
                </div>
                <div class="form-row">
                  <input
                    type="password"
                    required
                    value={user.cpassword}
                    onChange={handleInputs}
                    name="cpassword"
                  />
                  <span>Confirm Password</span>
                </div>
                <div class="form-row"></div>
                <div class="form-row">
                  <button type="submit" onClick={PostData}>Sign Up</button>
                </div>
                <button type="button" className="btn btn-outline" style={{color : "#0d6efd"}} onClick={()=>{
                navigate('/login')
            }}>I am already register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
