import React, { useState } from 'react'
import Navigation from '../../componets/Navigarion'
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

const Employeeprofile = () => {
  
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
    const userdata=localStorage.getItem("data")
    const storedData = [JSON.parse(userdata)]
    console.log(storedData);
  return (
    <>
    <Navigation/>


    <div  className="display" style={{width:'100%',display:'flex',justifyContent:"center",flexWrap:"wrap",}}>

            {
                storedData.map((item)=>(

                    <section style={{ backgroundColor: '#eee' }}>
                    <MDBContainer className="py-5 w-100">
                      
              
                      <MDBRow>
                        <MDBCol lg="4">
                          <MDBCard className="mb-4" style={{backgroundColor:"#EEEEEE",boxShadow:"none"}}>
                            <MDBCardBody className="text-center d-flex align-items-end  justify-content-center
" style={{backgroundImage:`url(${item.imagefile})`,backgroundSize:"contain",backgroundRepeat: "no-repeat",backgroundPosition:"center",borderRadius:".5rem",height:"12rem"}}>
                              {/* <MDBCardImage
                                src={item.imagefile}
                                alt="avatar"
                                // className="rounded-circle"
                                style={{ width: '200px' ,borderRadius:".5rem"}}
                                fluid /> */}
                              {/* <p className=" mb-1" style={{color:"white",fontWeight:"bolder"}}>{item.name}</p>
                              <p className=" mb-4">{item.state}</p> */}
                            </MDBCardBody>
                              {/* <div className="d-flex justify-content-center mb-2  " >
                                
                                <MDBBtn className="ms-1" color='danger' onClick={()=>handleDeleteUnapprovedEmployee(item._id)}>Delete Employee</MDBBtn>
                              </div> */}
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


        

    </>
  )
}

export default Employeeprofile