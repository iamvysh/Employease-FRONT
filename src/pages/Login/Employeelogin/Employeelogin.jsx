import React, { useRef } from 'react'
import Navigation from '../../../componets/Navigarion'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Employeelogin = () => {
    
  const navigate=useNavigate()
  const liscneRef=useRef(null)
  const passwordRef=useRef(null)

  const handleLogin=async()=>{
    const id=liscneRef.current.value
    const password=passwordRef.current.value
    const Data={
      id,password
    }

    try {
      const response=await axios.post("http://localhost:3000/employee/login",Data)
      // console.log(response);
      if(response.status==200){
        console.log(response.data.Data);
        const dataString = JSON.stringify(response.data.Data);

        localStorage.setItem("data",dataString)
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:500,
          onClose: () => {
            navigate('/employeemain');
          }
        })
      }else{
        alert("something went wrong")
      }
      
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div>
        <Navigation/>
        <ToastContainer />

        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h2 className='text-center mb-5 fw-bolder'>Employee -LogIn</h2>
      <MDBInput wrapperClass='mb-4' label='Licence no' id='form1' type='text'   ref={liscneRef}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={passwordRef}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
        <a href="!#">Forgot password?</a>
      </div>
<div style={{display:"flex",justifyContent:"center"}}>

      <MDBBtn className="mb-4" onClick={handleLogin}>Log In</MDBBtn>
</div>

      <div className="text-center">
        <p>Not a member? <a href="/employeeregister">Register</a></p>
        

       
      </div>

    </MDBContainer>
    
    </div>
  )
}

export default Employeelogin
