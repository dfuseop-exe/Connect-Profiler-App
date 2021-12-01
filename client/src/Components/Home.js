import React, { useEffect , useState} from "react";
import "../css/Home.css"
import welcome from '../images/welcome.svg'

export default function Home() {
    

    const [userData, setUserData] = useState({
        _id: "ID",
        name: " Developer :- Dfuseop.exe",
        email: "@gmail.com",
        phone: '7485xxxxxxx',
        work: "Technology :- MERN Stack",
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

        const [show, setShow] = useState(false)
    
      const userContact = async ()=>{
        try {
          const res = await fetch('/getdata' , {
              method : "GET" ,
              headers : {
                "Content-Type" : "application/json"
              },
          });
    
    
    
          const data = await res.json();
          setUserData(data);
          setShow(true)
    
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error ;
          }
    
    
        } catch (error) {
          console.log(error);
    
        }
    }
    
    useEffect(() => {
      userContact();
     }, [])
    

    return (
        <div className='container container-contact'>
            <div className="home-div">
           <img style={{marginBottom : '20px'}} src={welcome} alt="" />
            <h1 style={{fontFamily : "Nunito" , color  : "#0d6efd"}} >{userData.name}</h1>
            <h3>{show ? 'Happy to see You' : "Technology :- Mern Stack"}</h3>
        </div>
        </div>
    )
}
