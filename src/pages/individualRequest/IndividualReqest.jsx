import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

const IndividualReqest = () => {

    const{id} =useParams()

    const [user,setuser]=useState([])

    

    const GetIndividualEmployee=async(id)=>{
        try {

            const response=await axios.get(`http://localhost:3000/agency/getunapprovedemployee/${id}`)

            setuser([response.data.Data])
            console.log(response.data.Data);

            
        } catch (error) {
            console.log(error)
        }
    }
    console.log(id);

    useEffect(()=>{
        GetIndividualEmployee(id)
        // console.log(ID);
    },[id])
  return (
    <>
    <Navigation />

    <div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
        <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:"#425a71"}} className="sidebar_div">
          <Sidebar />

         </div>

          <div  className="display" style={{width:'80%',display:'flex',justifyContent:"center",flexWrap:"wrap",}}>

            {
                user.map((item)=>(

                    <section style={{ backgroundColor: '#eee' }}>
                    <MDBContainer className="py-5">
                      
              
                      <MDBRow>
                        <MDBCol lg="4">
                          <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '150px' }}
                                fluid />
                              <p className="text-muted mb-1">{item.name}</p>
                              <p className="text-muted mb-4">{item.state}</p>
                              <div className="d-flex justify-content-center mb-2">
                                <MDBBtn>Follow</MDBBtn>
                                <MDBBtn outline className="ms-1">Message</MDBBtn>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
              
                          
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCard className="mb-4" style={{marginLeft:"8rem",minWidth:"30rem "}}>
                            <MDBCardBody style={{width:"31rem"}}>
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Name</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Phone number</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              
                              
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Address</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Aadhar number</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>State</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Pincode</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Skills</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>gender</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                            </MDBCardBody>
                          </MDBCard>
              
                        
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </section>

                ))
            }
     

          
            


          </div>
      </div>
      
    </>
  )
}

export default IndividualReqest
