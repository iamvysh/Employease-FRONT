import React, { useRef } from "react";
import "./userlanding.css";
import Header from "../../componets/Header/Header";
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from "mdb-react-ui-kit";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';


const JobPost = () => {
  const formRef=useRef(null)

  const handlePost=async(e)=>{
    e.preventDefault()
    const formElement = formRef.current;
    const id=localStorage.getItem("userid")
    // Access the values of form fields by their names
    const jobTitle = formElement.title.value; // Job Title
    const category=formElement.category.value
    const phoneNumber = formElement.phonenumber.value; // Phone Number
    const numberOfEmployees = formElement.numberofemployees.value; // Number of Employees Required
    const address = formElement.address.value; // Address
    const place = formElement.place.value; // Place
    const jobDescription = formElement.jobdescription.value; // Job Description

    // Now, you can use these values as needed
    // console.log("Job Title:", jobTitle);
    // console.log("Phone Number:", phoneNumber);
    // console.log("Number of Employees Required:", numberOfEmployees);
    // console.log("Address:", address);
    // console.log("Place:", place);
    // console.log("Job Description:", jobDescription);
      console.log("category",category)
     
    const Data={
      userId:id,
      jobtitle:jobTitle,
      category:category,
      phonenumber:phoneNumber,
      address:address,
      place:place,
      jobdescription:jobDescription,
      numberofemployees:numberOfEmployees

    }

    try {
         const response=await axios.post("http://localhost:3000/user/postjob",Data)
          console.log(response);
          if(response.status==200){
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose:500,
              // onClose: () => {
              //   navigate('/agencyhome');
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
      
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
          <ToastContainer />

      <div id="image_division">
        <div id="content">
          <Header />
          {/* <div className="main_container"></div> */}
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <h1>POST&nbsp;&nbsp;&nbsp;YOUR&nbsp;&nbsp;&nbsp;JOB</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <form style={{ width: "30rem" }} ref={formRef} >
              <MDBInput id="form4Example1" wrapperClass="mb-4" label="Job Title" name="title" contrast/>
              <Form.Select aria-label="Default select example" name="category"  style={{marginBottom:"1.5rem",background:"transparent",color:"white"}} >
      <option>Job Category</option>
      <option value="Building Construction" style={{backgroundColor:"#001524"}}>Building Construction</option>
      <option value="Farming" style={{backgroundColor:"#001524"}}>Farming</option>
      <option value="Carpenter" style={{backgroundColor:"#001524"}}>Carpenter</option>
      <option value="Painting" style={{backgroundColor:"#001524"}}>Painting</option>
      <option value="Welding" style={{backgroundColor:"#001524"}}>Welding</option>
      <option value="Mechanic" style={{backgroundColor:"#001524"}}>Mechanic</option>
      <option value="Driver" style={{backgroundColor:"#001524"}}>Driver</option>
      <option value="Catering" style={{backgroundColor:"#001524"}}>Catering</option>
      <option value="Plumbing" style={{backgroundColor:"#001524"}}>Plumbing</option>
      <option value="Electriction"style={{backgroundColor:"#001524"}}>Electriction</option>
      <option value="Others"style={{backgroundColor:"#001524"}}>Others</option>
    </Form.Select>
              <MDBInput
                // type="email"
                id="form4Example2"
                wrapperClass="mb-4"
                label="Phonenumber"
                name="phonenumber"

                contrast
              />
              <MDBInput
                type="number"
                id="form4Example2"
                wrapperClass="mb-4"
                label="Number of Employees Required"
                name="numberofemployees"

                contrast
              />
               <MDBInput
                // type="number"
                id="form4Example2"
                wrapperClass="mb-4"
                label="Address"
                name="address"

                contrast
              />
              <MDBInput
                // type="number"
                id="form4Example2"
                wrapperClass="mb-4"
                label="place"
                name="place"
                 
                contrast
              />
              <MDBTextArea
                wrapperClass="mb-4"
                // textarea
                id="form4Example3"
                rows={4}
                label="Job Description"
                name="jobdescription"

                contrast
              />

              {/* <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4"
                id="form4Example4"
                label="Send me a copy of this message"
                defaultChecked
              /> */}




              <MDBBtn onClick={handlePost} type="submit" className="mb-4" block>
                Post JOb
              </MDBBtn>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPost;
