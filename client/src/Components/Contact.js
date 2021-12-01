import React, { useEffect , useState} from "react";
import "../css/Contact.css";

export default function Contact() {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: '',
    message: "",
    });

  const userContact = async ()=>{
    try {
      const res = await fetch('/getdata' , {
          method : "GET" ,
          headers : {
            "Content-Type" : "application/json"
          },
      });



      const data = await res.json();
      setUserData({...userData , name:data.name , email : data.email , phone : data.phone});

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


 //storing data

 const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData , [name]:value })
 }

 const contactForm = async (e)=>{
   e.preventDefault();
   const{name , email , phone , message} = userData;

   const res = await fetch('/contact' , {
     method : 'POST' ,
     headers :{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
      name , email , phone , message
   })

 })

 const data = await res.json();

 if(!data){
   console.log("message not send");
 }else{
   alert("Message Send");
   setUserData({...userData , message : ""})
 }
}
  return (
    <div className="container">
      <div className="contact-info">
        <div className="info">
          <div className="info-icon">
          <i className="fa-solid fa-phone"></i>
          </div>
          <div className="info-text">
            <h5 style={{ color : "#0d6efd"}}>Phone</h5>
            <h5>8530164970</h5>
          </div>
        </div>

        <div className="info">
          <div className="info-icon">
          <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="info-text">
            <h5 style={{ color : "#0d6efd"}}>Email</h5>
            <h5>sushant.165.shinde@gmail.com</h5>
          </div>
        </div>

        <div className="info">
          <div className="info-icon">
          <i className="fa-solid fa-location-pin"></i>
          </div>
          <div className="info-text">
            <h5 style={{color : "#0d6efd"}}>Address</h5>
            <h5>Dhule MH , India</h5>
          </div>
        </div>
      </div>


{/* --------------------------------------------------------- */}

    <form method="POST" className='getintouch'>
        <div>
            <h2 style={{textAlign : 'center' , color : "#0d6efd"}}>Get In Touch</h2>
        </div>
        <div className='contact-inputs'>
            <input type="text" class="form-control" placeholder='Enter Name' name='name' value={userData.name} onChange={handleInput}/>
            <input type="email" class="form-control" placeholder='Enter Email' value={userData.email} onChange={handleInput} />
            <input type="text" class="form-control" placeholder='Enter Number' name='phone' value={userData.phone} onChange={handleInput}/>
        </div>

        <textarea class="form-control contact-text" rows="3"  placeholder='Input Your Message' name='message'  value={userData.message} onChange={handleInput} ></textarea>
        

        <div>
        <button type="button" className="btn btn-outline-primary " onClick={contactForm}>Send Message</button>
        </div>
    </form>







    </div>
  );
}