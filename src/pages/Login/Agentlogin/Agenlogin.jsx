import React, { useRef } from 'react'
import Navigation from '../../../componets/Navigarion'
import axios from 'axios';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Agenlogin = () => {

    const navigate=useNavigate()
    const emailref=useRef("")
    const passwordref=useRef("")

    const handleAgencyLogin=async()=>{

        const email=emailref.current.value;
        const password=passwordref.current.value;

        const Data={
          email,password
        }


        try {

          const response=await axios.post("http://localhost:3000/agency/login",Data)

          if(response.status==200){
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose:500,
              onClose: () => {
                navigate('/agencyhome');
              }
            })


          }else if(response.status==401){
            toast.warn(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              // onClose: () => {
              //   navigate('/');
              // }
      
            })

          }else if(response.status==404){
            toast.warn(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              // onClose: () => {
              //   navigate('/');
              // }
      
            })


          }else{
            toast.warn(err.response.data.message, {
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

        console.log(email,password);
      

    }
  return (
    <>
      <Navigation/>
      <ToastContainer />
      <MDBContainer className="p-3  d-flex justify-content-center align-items-center flex-column w-50" style={{marginTop:"12rem"}}>
      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center  ">
                SignIn - Agent
              </h3>
<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' ref={emailref}/>
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={passwordref}/>



<MDBBtn className="mb-4" onClick={handleAgencyLogin}>Sign in</MDBBtn>

<div className="text-center">
  <p>Not a member? <a  onClick={()=>navigate("/agencyregister")} style={{cursor:"pointer",color:"red",fontSize:"1rem"}}>Register</a></p>
  
</div>

</MDBContainer>

    </>
  )
}

export default Agenlogin
