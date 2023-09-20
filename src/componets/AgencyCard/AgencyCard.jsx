import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import { Margin } from "@mui/icons-material";

function AgencyCard({image,title,link}) {
  return (
    <div style={{marginLeft:".4rem",marginTop:"2rem"}}>
      
      
          {/* <MDBCol md="6" lg="4" className="mb-4"> */}
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src={image}
              fluid
              className="w-100"
            />
            <a href={link}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      {title}
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
        

     
        {/* </MDBCol> */}
      
      
            
    </div>
  );
}

export default AgencyCard;