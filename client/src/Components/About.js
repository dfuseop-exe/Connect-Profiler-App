import React, { useEffect , useState} from "react";
import '../css/About.css'
import about from '../images/about.svg'
import { useNavigate } from 'react-router-dom';

export default function About() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    _id: "ID",
    name: "Name",
    email: "@gmail.com",
    phone: '7485xxxxxxx',
    work: "work",
    password: "",
    cpassword: "",
    tokens: [
    {
    token: "",
    _id: ""
    }
    ],
    __v: 17
    });
  
  const callAboutPage = async ()=>{
      try {
        const res = await fetch('/about' , {
            method : "GET" ,
            headers : {
              Accept: "application/json",
              "Content-Type" : "application/json"
            },
            credentials : "include"
        });



        const data = await res.json();
        setUserData(data);

        if(!res.status === 200){
          const error = new Error(res.error);
          throw error ;
        }


      } catch (error) {
        console.log(error);
        navigate('/login')
      }
  }

  useEffect(() => {
   callAboutPage();
  }, [])

//[] call once

  return (
    <div className="container about-container">
      <div className='about-image'>
        <img className='imgabout' src={about} alt="" />
      </div>
      <div className='about-info'>
        <h1 style={{textAlign : 'center' , fontFamily : "Nunito" , color : "#0d6efd"}}>Your Profile</h1>

        <form method="GET" className='about-data'>
          <div className='data-col'>
            <p>User Id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Profession</p>
            <p>Phone</p>
          </div>
          <div className='data-row'>
          <p>{userData._id}</p>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <p>{userData.work}</p>
            <p>{userData.phone}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
