import React from 'react'
import Navigation from '../../../componets/Navigarion'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const Employeelogin = () => {
  return (
    <div>
        <Navigation/>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h2 className='text-center mb-5 fw-bolder'>Employee -LogIn</h2>
      <MDBInput wrapperClass='mb-4' label='Licence no' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Log In</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/employeeregister">Register</a></p>
        

       
      </div>

    </MDBContainer>
    
    </div>
  )
}

export default Employeelogin
