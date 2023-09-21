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
    MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
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

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    

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
                                src={item.imagefile}
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '200px' }}
                                fluid />
                              <p className="text-muted mb-1">{item.name}</p>
                              <p className="text-muted mb-4">{item.state}</p>
                              <div className="d-flex justify-content-center mb-2">
                                <MDBBtn color='success'>Approve</MDBBtn>
                                <MDBBtn className="ms-1" color='danger'>Reject</MDBBtn>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
              
                          
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCard className="mb-4" style={{marginLeft:"8rem",minWidth:"30rem "}}>
                            <MDBCardBody style={{width:"31rem"}}>
                            <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText> License id</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item._id}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Name</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.name}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.email}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Phone number</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.phonenumber}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              
                              
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Address</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.address}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Aadhar number</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.Aadharnumber}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>State</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.state}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Pincode</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.pincode}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Skills</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{item.skills}</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                                <MDBRow>
                                  <MDBCol sm="3">
                                    <MDBCardText>gender</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{item.gender}</MDBCardText>
                                  </MDBCol>
                                </MDBRow>

                                <hr />
                                <MDBRow>
                                  <MDBCol sm="3">
                                    <MDBCardText>Pcc certificate</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                    <MDBCardText className="text-muted">
                                    <MDBBtn onClick={toggleShow}>Show Cerificate</MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent style={{width:"50rem",height:"50rem"}}>
              <MDBModalHeader>
                <MDBModalTitle>Police Clearence Certificate</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>

              <embed src={item.pcccertificate} width="100%" height="100%" />


            
              

              
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
              
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
                                    </MDBCardText>
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
