import React, { useEffect } from "react";
import Navigation from "../../componets/Navigarion";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const CommonRegister = () => {
  useEffect(() => {
    AOS.init();
  });

  const navigate=useNavigate()
  return (
    <>
      <Navigation />
      <div className="container">
        <MDBContainer fluid className="my-5 text-center">
          <h4 className="mt-4 mb-5">
            <strong  >Registration</strong>
          </h4>

          <MDBRow>
            <MDBCol md="10" lg="4" className="mb-4">
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                onClick={()=>navigate("/employeeregister")}
                >
                <img
                  src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  fluid
                  className="w-100"
                 
                />
                <a onClick={()=>navigate("/employeeregister")}>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100" >
                      <h5 >
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark" >
                          Employee-Registration
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbnN1bHRlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          Agency-Registration
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBRipple
                rippleColor="dark"
                rippleTag="div"
                className="bg-image rounded hover-zoom shadow-1-strong"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <img
                  src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          User-Registration
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </div>
    </>
  );
};

export default CommonRegister;
