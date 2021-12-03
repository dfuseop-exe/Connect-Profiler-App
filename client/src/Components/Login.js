import React, { useContext, useState } from 'react'
import '../css/login.css'
import login from '../images/login.svg'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Login() {

  const {state , dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/login' , {
      method : "POST" ,
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })

    const data = res.json();

    if(res.status === 400 || res.status === 404 || !data){
      window.alert("Invalid Credentials")
    }else{
      dispatch({type : "USER" , payload : true});
      window.alert("Log In Successfull")
      navigate('/');
    }
  }

    return (
      
     <div style={{backgroundColor : "#fafafa" , marginTop : '150px'}}>
        {/* card */}
      <div className="login-center-container shadow border-0">
            {/* flex container */}
          <div className="login-container-card ">



              {/* left card */}
                <div className="item-left-login">
                   <img src={login} alt="login" />
                </div>
           

              {/* right card */}

                <div className="item-right-login">
                  
                <div className='login-heading'>
                  <h1 style={{fontFamily : "Nunito" , color  : "#0d6efd"}} >Log In</h1> 
                 </div>

                 <form method="POST" className='login-form'>

                    <div className='inputWithIcon-login'>
                        <input
                        placeholder='Your Email'
                        name='text'
                        className='todo-input'
                        value={email}
                        onChange = {(e)=>setEmail(e.target.value)}
                        />
                        
                    </div>


                    <div className='inputWithIcon-login'>
                        <input
                        type='password'
                        placeholder='Password'
                        name='text'
                        className='todo-input'
                        value={password}
                        onChange = {(e)=>setPassword(e.target.value)}
                        />
                        
                    </div>

                    <button type="button" onClick={loginUser} className="btn btn-outline-primary btn-login">log in</button>


                  </form>  

                </div>

          {/* End Card Container  */}
            </div>
      </div>
   
  </div>
    )
}
