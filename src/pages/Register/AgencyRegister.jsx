import React, { useRef } from 'react'
import Navigation from '../../componets/Navigarion'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const AgencyRegister = () => {

const navigate=useNavigate()
const formRef=useRef(null)

const handleSubmit =async (e) => {
    e.preventDefault(); 

    const username = formRef.current.username.value;
    const password = formRef.current.password.value;
    const email = formRef.current.email.value;
    const confirmpassword=formRef.current.confirmpassword.value
    const ispasswordOk=password==confirmpassword

    const Data={
        username,password,email
    }

    try {
         if(ispasswordOk){
            const response=await axios.post("http://localhost:3000/agency/register",Data)
            if(response.status==200){
              toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:500,
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
         }else{
          toast.warn("password missmatch", {
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
    
    console.log(username, password, email,confirmpassword);
  };





  return (
    <>
      <Navigation/>
      <ToastContainer />

      <Container>
        <Row className="vh-100 d-flex justify-content-center ">
          <Col md={8} lg={6} xs={12}>
            {/* <Card > */}
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-5 mt-5 text-center text-uppercase ">
                    Agency-Registration
                  </h2>
                  <div className="mb-3">
                    <Form ref={formRef} onSubmit={handleSubmit}>
                      <Form.Group className="mb-4 " controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='username' />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  name='email'/>
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name='password'/>
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name='confirmpassword' />
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3" >
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                         <a   onClick={()=>navigate("/agencylogin")} style={{cursor:"pointer"}} className="text-primary fw-bold">
                          Sign In
                        </a> 
                        
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            {/* </Card> */}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default AgencyRegister
