import React, { useRef } from 'react'
import Navigation from '../../componets/Navigarion'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth,provider} from '../../Apis/Firebase'

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import GoogleButton from 'react-google-button'
import axios from 'axios';
const Userregistration = () => {




  const nameRef=useRef(null)
  const emailRef=useRef(null)
  const phonrnumberRef=useRef(null)
  const passwordRef=useRef(null)




    const handlelogin=async()=>{
        console.log('yyy');
        try{
            console.log('tttttt');
            const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const user = data.user;
      // console.log(credential);
      console.log("userfgj",user);



                  try {

                    const response=await axios.post("http://localhost:3000/user/googleregister",user)

                    if(response.status==201){
                      alert ("user registration is successful")
                    }else{
                      alert("user registration failed")
                    }
                    
                  } catch (error) {
                    alert(error)
                  }
      
        }catch(err){
            console.log(err);
        }
    }

//    const  handlelo=()=>{
//   console.log("hy");


//     }



const handleRegistratioan=async()=>{

  const name=nameRef.current.value
  const email=emailRef.current.value
  const phonenumber=phonrnumberRef.current.value
  const password=passwordRef.current.value

  const Data={
    name,email,phonenumber,password
  }

  try {

    const response= await axios.post("http://localhost:3000/user/register",Data)

    if(response.status==200){
     return  alert("user registered suceesfully")
    }
    if(response.status==205){
      alert("user already registered")
    }
    
  } catch (error) {
    alert(error)
  }
}
  return (
    <>
     
     <Navigation/>

     {/* <button onClick={()=>handlelogin()}>fshj</button> */}

     {/* <button onClick={handlelo}>auth</button> */}

     {/* <MDBBtn onClick={handlelogin}>login</MDBBtn>  */}

     <MDBContainer className="p-3  d-flex justify-content-center align-items-center flex-column w-50" style={{marginTop:"12rem"}}>
      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center  ">
                Register - User
              </h3>

              <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' ref={nameRef}/>

<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' ref={emailRef}/>
<MDBInput wrapperClass='mb-4' label='Phonenumber' id='form1' type='text' ref={phonrnumberRef}/>

<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={passwordRef} />



<MDBBtn className="" style={{width:"13rem"}}  onClick={handleRegistratioan}>Register</MDBBtn>
<p style={{marginBottom:"0px"}}>------or------</p>
<GoogleButton
  type="light" // can be light or dark
  onClick={handlelogin}
/>

<div className="text-center">
  <p>Not a member? <a  onClick={()=>navigate("/agencyregister")} style={{cursor:"pointer",color:"red",fontSize:"1rem"}}>Log In</a></p>
  
</div>

</MDBContainer>
    </>
  )
}

export default Userregistration
