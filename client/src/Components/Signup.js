import React, { useState } from "react";
import signup from '../images/signup.svg'
import '../css/Signup.css'
import {  useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name : '',
    email : '',
    phone : '',
    work : '',
    password : '',
    cpassword : '',
  })

  let name , value ;

  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user , [name]:value} )
  }


  const PostData = async (e)=>{
    e.preventDefault();
    const {name , email , phone , work , password , cpassword} =user;

    const res = await fetch("/register" , {
      method : "POST" ,
      headers :{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name , email , phone , work , password , cpassword
      })
    })

    
    const data = await res.json();
    if(res.status === 422 || res.status === 400 || !data){
      window.alert("Invalid Registration");
      console.log( "Invalid Registration")

    }else{
      window.alert("Registration SuccessFull");
      console.log( "Registration SuccessFull");
      console.log(res.body)
      navigate('/login')
    }
  }

  return (
    <div style={{backgroundColor : "#fafafa" , marginTop : '80px'}}>
        {/* card */}
      <div className="signin-center-container shadow border-0">
      
      {/* flex container */}
    <div className="signin-container-card ">
      

        {/* left card */}
          <div className="item-left">

           <div className='signup-head'>
            <h1 style={{fontFamily : "Nunito" , color  : "#0d6efd"}}  >Create New Profile</h1> 
           </div>

           <form method='POST' className='signup-form'>
             
           <div className='inputWithIcon-signup'>
              <input
                placeholder='Your Name'
       
                className='todo-input'
                value = {user.name}
                onChange={handleInputs}
                name = 'name'
              />
               <i className="fa-solid fa-user fa-lg" aria-hidden='true'></i>
            </div>

            <div className='inputWithIcon-signup'>
              <input
                placeholder='Your Email'
     
                className='todo-input'
                value = {user.email}
                onChange={handleInputs}
                name = 'email'
              />
               <i className="fa-solid fa-envelope fa-lg" aria-hidden='true'></i>
            </div>

            <div className='inputWithIcon-signup'>
              <input
                placeholder='Mobile Number'
                name='phone'
                className='todo-input'
                value = {user.phone}
                onChange={handleInputs}
              />
               <i className="fa-solid fa-phone fa-lg" aria-hidden='true'></i>
            </div>


            <div className='inputWithIcon-signup'>
              <input
                placeholder='Your Profession'
            
                className='todo-input'
                value = {user.work}
                onChange={handleInputs}
                name = 'work'
              />
               <i className="fa-solid fa-briefcase fa-lg" aria-hidden='true'></i>
            </div>


            <div className='inputWithIcon-signup'>
              <input
                placeholder='Password'
                type='password'
                className='todo-input'
                value = {user.password}
                onChange={handleInputs}
                name = 'password'
              />
               <i className="fa-solid fa-lock fa-lg" aria-hidden='true'></i>
            </div>

            <div className='inputWithIcon-signup'>
              <input
                placeholder='Confirm Password'
                type='password'
                className='todo-input'
                value = {user.cpassword}
                onChange={handleInputs}
                name = 'cpassword'
              />
               <i className="fa-solid fa-lock fa-lg" aria-hidden='true'></i>
            </div>
            <button type="button"  onClick={PostData} className="btn btn-outline-primary btn-signup">Sign up</button>
            </form>  
              
           
          </div>
     

        {/* right card */}
          <div className="item-right-signup">
            
          <div className='img-signup'>
                <img src={signup} alt="signup" />
            </div>

            <div className='login-text'> 
  
            <button type="button" className="btn btn-outline-info" onClick={()=>{
              navigate('/login')
            }}>I am already register</button>
              
            </div>

          </div>

    {/* End Card Container  */}
      </div>
</div>

    </div>
      
  );
}
