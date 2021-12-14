import React, { useEffect , useState} from "react";
import "../css/Home.css"
import welcome from '../images/welcome.svg'

export default function Home() {

    const [userData, setUserData] = useState({
        _id: "ID",
        name: "Dfuseop.exe",
        email: "@gmail.com",
        phone: '7485xxxxxxx',
        work: "Full stack Developer",
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
        <section className='container home-wrapper'>
            <div className="row ">
                <div className="col-md-12 mx-auto home-img d-flex justify-content-center ">
                    <img  src={welcome} alt="Home Image" />
                </div>

                <div className="col-12 home-content">
                    <div className="container my-3">
                        
                       
                       <div className="container mine-data">
                        
                        <h1 style={{color : "#0d6efd" }}>{userData.name}</h1>
                        <h3>{show ? 'Happy to see You' : "Technology :- Mern Stack"}</h3>
                       </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}
