import React, { useRef, useState } from "react";
import Navigation from "../../componets/Navigarion";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
  MDBFile,
} from "mdb-react-ui-kit";
import axios from "axios";
import "./employee.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




const EmployeeRegister = () => {

  const navigate=useNavigate()
  const [Aadhar, setAadhar] = useState("");

  const nameRef = useRef("");
  const phoneNumberRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const aadharRef = useRef("");
  const addressRef = useRef("");
  const pincodeRef = useRef("");
  const stateRef = useRef("");
  const skillsRef = useRef("");
  
  


  const [imageFile,selectedimage] = useState(null);
  const [certificate,selectedCertificate]=useState(null)

  const [selectedGender, setSelectedGender] = useState(null); 

  

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value); 
  };

  const handleimageFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    selectedimage(file);
  };

  const handlecertificateChange = (event) => {
    const Certifiactefile = event.target.files[0]; // Get the first selected file
    selectedCertificate(Certifiactefile);
  };

  const handleRegister=async(e)=>{
    e.preventDefault()
    const name=nameRef.current.value;
    const phonenumber=phoneNumberRef.current.value
    const email=emailRef.current.value
    const password=passwordRef.current.value
    const address=addressRef.current.value
    const Aadharnumber= aadharRef.current.value
    const pincode=pincodeRef.current.value
    const state=stateRef.current.value
    const skills=skillsRef.current.value
    const imagefile=[imageFile,certificate]
    const gender=selectedGender
  console.log(imagefile,"these arre files");
    const Data={
      name:name,
      phonenumber:phonenumber,
      email:email,
      password:password,
      address:address,
      Aadharnumber:Aadharnumber,
      pincode:pincode,
      state:state,
      skills:skills,
      gender:gender,
      files:imagefile
    }
    const formDataToSend = new FormData()


      for (const key in Data) {
      if (key === 'files') {
        for (let i = 0; i < Data.files.length; i++) {
          formDataToSend.append('imagefile', Data.files[i]);
        }
      } else {
        formDataToSend.append(key, Data[key]);
      }
    }



    console.log(formDataToSend,"formdata  to send");

    try{
      const response= await axios.post("http://localhost:3000/employee/register",formDataToSend,{
        headers:{
          
          // *********** TO corect the req.files undifined error *******************
          'Content-Type':'multipart/form-data'
        }
      })
               
              console.log("response",response)



              if(response.status==200){

                // alert("employee registered successfully")  
                toast.success(response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose:500,
                  onClose: () => {
                    navigate('/');
                  }
                })


              }



    }catch(err){
      console.log("error",err);
      toast.warn(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2500,
        // onClose: () => {
        //   navigate('/');
        // }

      });
      console.log(err.response)

    }
  

  }

  


  // const handleAadharApi = async () => {

  // };

  console.log(Aadhar);

  return (
    <>
      <Navigation />
      <ToastContainer />


      <div className="container">
        <MDBContainer fluid>
          <MDBRow className="justify-content-center align-items-center m-5">
            {/* <MDBCard> */}
            <MDBCardBody className="px-4">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center  ">
                Registration Form
              </h3>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    size="lg"
                    id="form1"
                    type="text"
                    ref={nameRef}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phonenumber"
                    size="lg"
                    id="form2"
                    type="text"
                    ref={phoneNumberRef}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    id="form3"
                    type="email"
                    ref={emailRef}
                  />
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <h6 className="fw-bold">Gender: </h6>
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="Female"
                    label="Female"
                    inline
                    onChange={handleRadioChange}
                  />
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="Male"
                    label="Male"
                    inline
                    onChange={handleRadioChange}
                  />
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio3"
                    value="Other"
                    label="Other"
                    inline
                    onChange={handleRadioChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    id="form4"
                    type="password"
                    ref={passwordRef}
                  />
                </MDBCol>

                <MDBCol
                  md="6"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Aadhar number"
                    size="lg"
                    id="form5"
                    type="text"
                    // onChange={(e) => setAadhar(e.target.value)}
                    ref={aadharRef}
                  />
                 
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="upload image"
                    size="lg"
                    id="form6"
                    type="file"
                    onChange={handleimageFileChange} 
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="upload pcccertificate"
                    size="lg"
                    id="form7"
                    type="file"
                    onChange={handlecertificateChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Address"
                    size="lg"
                    id="form8"
                    type="text"
                    ref={addressRef}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Pincode"
                    size="lg"
                    id="form9"
                    type="text"
                    ref={pincodeRef}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="State"
                    size="lg"
                    id="form8"
                    type="text"
                    ref={stateRef}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Skills"
                    size="lg"
                    id="form9"
                    type="text"
                    ref={skillsRef}
                  />
                </MDBCol>
              </MDBRow>

              <div style={{display:"flex",justifyContent:"center"}}>

              <MDBBtn className="mb-4" size="lg" style={{width:"40%"}} onClick={handleRegister}>
                Register
              </MDBBtn>
              </div>
              <div className="text-center">
  <p>Already a member? <a  onClick={()=>navigate("/employeelogin")} style={{cursor:"pointer",color:"red",fontSize:"1rem"}}>Login</a></p>
  
</div>

            </MDBCardBody>
            {/* </MDBCard> */}
          </MDBRow>
        </MDBContainer>
        
      </div>
    </>
  );
};

export default EmployeeRegister;
