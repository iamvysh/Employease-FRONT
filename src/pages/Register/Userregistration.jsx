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
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Userregistration = () => {



  const navigate=useNavigate()
  const nameRef=useRef(null)
  const emailRef=useRef(null)
  const phonrnumberRef=useRef(null)
  const passwordRef=useRef(null)




    const handlelogin=async()=>{
        
        try{
            
            const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const user = data.user;
      // console.log(credential);
      console.log("userfgj",user);



                  try {

                    const response=await axios.post("http://localhost:3000/user/googleregister",user)

                    if(response.status==201){
                      toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose:500,
                        onClose: () => {
                          navigate('/userlogin');
                        }
                      })
                    }else{
                      toast.warn("user already registered,please login", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        // onClose: () => {
                        //   navigate('/');
                        // }
                
                      })
                    }
                    
                  } catch (error) {
                    toast.warn(error.response.data.message, {
                      position: toast.POSITION.TOP_RIGHT,
                      autoClose: 2500,
                      // onClose: () => {
                      //   navigate('/');
                      // }
              
                    })
                  }
      
        }catch(err){
          toast.warn(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            // onClose: () => {
            //   navigate('/');
            // }
    
          })
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
     return   toast.success(response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:500,
      onClose: () => {
        navigate('/userlogin');
      }
    })
    }
    if(response.status==205){
      toast.warn("user registration failed", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2500,
        // onClose: () => {
        //   navigate('/');
        // }

      })    }
    
  } catch (error) {
    toast.warn(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2500,
      // onClose: () => {
      //   navigate('/');
      // }

    })
  }
}
  return (
    <>
     
     <Navigation/>
     <ToastContainer />


     {/* <button onClick={()=>handlelogin()}>fshj</button> */}

     {/* <button onClick={handlelo}>auth</button> */}

     {/* <MDBBtn onClick={handlelogin}>login</MDBBtn>  */}

     <MDBContainer className="p-3  d-flex justify-content-center align-items-center flex-column w-50" style={{marginTop:"6rem"}}>
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
  label='Sign up with Google'

  type="light" // can be light or dark
  onClick={handlelogin}
/>

<div className="text-center">
  <p>Already a member? <a  onClick={()=>navigate("/userlogin")} style={{cursor:"pointer",color:"red",fontSize:"1rem"}}>Log In</a></p>
  
</div>

</MDBContainer>
    </>
  )
}

export default Userregistration
