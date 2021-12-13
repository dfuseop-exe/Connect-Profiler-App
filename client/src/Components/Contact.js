import React, { useEffect , useState} from "react";
import "../css/Contact.css";
import contact from "../images/contact.svg"

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
    <div className="container body1">
        <div class="contact-form">
       <div class="first-container">
        <div class="info-container">
          <img style={{width : "100%" , height : "200px"}} src={contact} alt="contact Image" />
          <div> 
            <h3>Address</h3>
            <p>Dhule , Maharashtra India</p>
          </div>
          <div> 
            <h3>Phone Number</h3>
            <p>+91 8530164970</p>
          </div>
          <div> 
            <h3>Email Support</h3>
            <p>sushant.165.shinde.com</p>
          </div>
        </div>
       </div>
       <div class="second-container">
         <h2><span style={{color : "#0d6efd"}}>Contact</span> With Us</h2>
         <form method="POST">
         <div class="form-group">
             <label for="email-input">Enter your Full Name</label>
             <input id="email-input" type="text" placeholder="Eg. sushant rajendra shinde"    name='name' value={userData.name} onChange={handleInput} required=""/>
           </div>
           <div class="form-group">
             <label for="email-input">Enter your email</label>
             <input id="email-input" type="text" placeholder="Eg. example@gmail.com" name='email' value={userData.email} onChange={handleInput}  required=""/>
           </div>
           <div class="form-group">
             <label for="phone-input">Enter phone number</label>
             <input id="phone-input" type="text" placeholder="Eg. 8530164970"  name='phone' value={userData.phone} onChange={handleInput} required=""/>
           </div>
           <div class="form-group">
             <label for="message-textarea">Message</label>
             <input class="textarea" id="message-textarea" placeholder="Write us a message"/>
           </div>
           <a class="btn" onClick={contactForm}>Send message</a>
         </form>
       </div>
     </div>
    </div>
  );
}
