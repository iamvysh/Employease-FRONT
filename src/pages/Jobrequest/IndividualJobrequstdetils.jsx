import React, { useEffect, useState } from "react";
import Navigation from "../../componets/Navigarion";
import Sidebar from "../../componets/sidebar/Sidebar";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const IndividualJobrequstdetils = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const { id } = useParams();

  // console.log("****id*****",id);

  const HandleApproveTheJob = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/agency/jobs/approvejob/${id}`
      );
      if (response.status == 200) {
        return alert("job approved succesfully");
      }
      if (response.status == 203) {
        return alert("employees are not scheduled");
      }
      if (response.status == 404) {
        return alert("no job found");
      }
    } catch (error) {
      alert("internal server error ", error);
    }
  };
  const getUserhostedJobById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/agency/getuserbyid/${id}`
      );

      if (response.status == 200) {
        console.log(response.data.Data);
        setUser([response.data.Data]);
      }
    } catch (error) {
      console.log("******error********", error);
    }
  };

  useEffect(() => {
    getUserhostedJobById();
  }, id);

  // console.log(user);

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
                            <MDBCardText>Show Suitable employees</MDBCardText>
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
                        <hr />
                        <MDBRow className="mx-3">
                          <MDBCol
                            sm="6"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <MDBBtn
                              size="sm"
                              color="success"
                              onClick={HandleApproveTheJob}
                            >
                              Approve
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol
                            sm="6"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {/* <MDBCardText className="text-muted ">{item.numberofemployees}</MDBCardText> */}
                            <MDBBtn size="sm" color="danger">
                              Reject
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
  );
};

export default IndividualJobrequstdetils;
