import React, { useEffect, useState } from 'react'
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
    MDBListGroupItem,
  } from "mdb-react-ui-kit";
import Navigation from '../../componets/Navigarion';
import Sidebar from '../../componets/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApprovedTab = () => {
     
    const [user,Setuser]=useState([])
    const {id}=useParams()
    console.log(id);

    const GetapprovedJob=async()=>{
        try {
            const response=await axios.get(`http://localhost:3000/agency/getuserbyid/${id}`)
            // console.log("*****approved jobs aan mhn***********8",response);
            Setuser([response.data.Data])
        } catch (error) {
            console.log(error);
        }
    }

  

    useEffect(()=>{
        GetapprovedJob()
    },[id])



    console.log("****this is user***007",user);
  return (
    <>
     <Navigation />

<div
  style={{ height: "100vh", display: "flex", flexDirection: "row" }}
  className="main_div"
>
  <div
    style={{
      width: "20%",
      position: "sticky",
      top: "0",
      left: "0",
      paddingTop: "3%",
      backgroundColor: "#425a71",
    }}
    className="sidebar_div"
  >
    <Sidebar />
  </div>

  <div
    className="display"
    style={{
      width: "80%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    {user.map((item) => (
      <section
        style={{
          backgroundColor: "#c7c1c1",
          width: "80%",
          height: "100vh",
        }}
      >
        <MDBContainer className="py-3">
          <MDBRow>
            <MDBCol
              lg="12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MDBCard className="" style={{ minWidth: "38rem " }}>
                <MDBCardBody style={{ width: "37rem" }}>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> JobTitle</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.jobtitle} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> Job Description</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.jobdescription} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Starting Date</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {new Date(item.Date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Number of Days</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.numberofdays}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> Job category</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.category} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Job requsest id</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item._id} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Userid</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.userId._id}  
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>

                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.userId.name} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email </MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted">
                        {item.userId.email} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phonenumber</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.phonenumber} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Place</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.place} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.address} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Total employees</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBCardText className="text-muted ">
                        {item.numberofemployees} 
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Sheduled employees</MDBCardText>
                    </MDBCol>
                    <MDBCol
                      sm="9"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MDBBtn
                        size="sm"
                        onClick={() =>
                          navigate(`/simileremployees/${item._id}`)
                        }
                      >
                        Click Here
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                  
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section >
    ))} 
  </div>
</div>




    </>
  )
}

export default ApprovedTab