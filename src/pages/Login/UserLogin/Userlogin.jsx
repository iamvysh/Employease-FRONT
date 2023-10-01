import React, { useRef } from 'react'
import Navigation from '../../../componets/Navigarion'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth,provider} from '../../../Apis/Firebase';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {

    const navigate=useNavigate()
    const emailRef=useRef(null)
    const passwordRef=useRef(null)


    const handleLogin=async()=>{
        const email=emailRef.current.value
        const password=passwordRef.current.value

        const Data={
            email,password
        }

        try {

            const response= await axios.post("http://localhost:3000/user/userlogin",Data)
            console.log(response);
            localStorage.setItem("userid",response.data.Data)

            if(response.status==200){
             return   toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose:500,
              onClose: () => {
                navigate('/usermain');
              }
            })
            }
            if(response.status==203){
              toast.warn(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500,
                onClose: () => {
                  navigate('/');
                }
        
              })    }

              if(response.status==209){
                toast.warn(response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 2500,
                  // onClose: () => {
                  //   navigate('/');
                  // }
          
                })    }
            
        } catch (error) {
            console.log("errror",error);
            
        }
    }


    const handleGoogleLogin=async()=>{
        try {
            const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const user = data.user;
      console.log(credential);
      console.log("user",user);


      try {

        const response=await axios.post("http://localhost:3000/user/googleauthlogin",user)
        console.log(response);
        localStorage.setItem("userid",response.data.Data)
        if(response.status==200){
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:500,
            onClose: () => {
              navigate('/usermain');
            }
          })
        }else{
          toast.warn("user not registered,please register", {
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
        } catch (error) {
            toast.warn(err.response.data.message, {
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

      <MDBContainer className="p-3  d-flex justify-content-center align-items-center flex-column w-50" style={{marginTop:"12rem"}}>
      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center  ">
                LogIn - User
              </h3>


<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' ref={emailRef}/>

<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={passwordRef} />



<MDBBtn className="" style={{width:"13rem"}}  onClick={handleLogin} >Log In</MDBBtn>
<p style={{marginBottom:"0px"}}>------or------</p>
<GoogleButton
  type="light" // can be light or dark
  onClick={handleGoogleLogin}
/>

<div className="text-center">
  <p>Not a member? <a  onClick={()=>navigate("/userregistration")} style={{cursor:"pointer",color:"red",fontSize:"1rem"}}>Register</a></p>
  
</div>

</MDBContainer>
    </>
  )
}

export default Userlogin
