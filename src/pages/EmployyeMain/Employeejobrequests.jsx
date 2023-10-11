import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import { useParams } from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from 'axios';

const Employeejobrequests = () => {

  const {id}=useParams()
  const [jobs,setjobs]=useState([])


// const Data={
//   id:id
// }

const GetallNewJobs=async()=>{
  try {
    const response=await axios.get(`http://localhost:3000/employee/newjobs/${id}`)
    setjobs(response.data.Data)
  } catch (error) {
    console.log(error);
  }
}
     
useEffect(()=>{
  GetallNewJobs()
},[id])




  // console.log("********id*******",id);
console.log(jobs);


const handleApprove=async(job_id)=>{

  const Data={
    employee_id:id,
    job_id:job_id
  }
  try {

    const response=await axios.put("http://localhost:3000/employee/approvejobrequest",Data)

    if (response.status==200) {
      alert("mone sett")
            GetallNewJobs()

    }

    if(response.status==203){
      alert("mone oombi")
    }
    
  } catch (error) {
    alert(error)
    
  }
}

const handleDelete=async(job_id)=>{

  try {

    const response=await axios.delete(`http://localhost:3000/employee/deletejobrequest/${id}/${job_id}`)

    if(response.status==200){
      alert("successfull")
      GetallNewJobs()
    }
    
  } catch (error) {
    
  }

}


  return (
    <>
    <Navigation/>
    <div className="main" style={{display:"flex",flexWrap:"wrap", width:"100%"}}>
      {/* <div className="jobcard" style={{height:"20rem",width:"20rem",backgroundColor:"aqua"}}> */}

      <MDBContainer fluid>

{jobs.map((item)=>( 
    <MDBRow className="justify-content-center mb-0">
    <MDBCol md="12" xl="10">
        {/* <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3" style={{ width: "55rem", important: "true" }}> */}
        <div className='shadow-0 border rounded-3 mt-4 mb-2' >
        <MDBCardBody style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <MDBRow>
            <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom hover-overlay"
              >
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  fluid
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol md="6">
              <h5 className='mt-1'>
                {item.jobtitle}
              </h5>
              <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                  {/* <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" /> */}
                </div>
                {/* <span>4</span> */}
              </div>
              <div className="mt-1 mb-0 text-muted small">
                <span>
                  {item.place} 
                  </span>
                <span className="text-primary"> • </span>
                <span>
                  {item.phonenumber} 
                </span>
                
                <span>
                  
                  <br />
                </span>
              </div>

              <div className="mt-1 mb-0 text-muted small">
                <span>
                {new Date(item.Date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric' })}                  </span>
                <span className="text-primary"> • </span>
                <span>
                  {item.numberofdays}  days
                </span>
                
                <span>
                  
                  <br />
                </span>
              </div>









              <div className="mb-2 text-muted small">
                <span>
                  {item.address}
                </span>
                
                <span>
                  
                  <br />
                </span>
              </div>
              <p className="text-truncate mb-4 mb-md-0">
             {item.jobdescription} 
              </p>
            </MDBCol>
            <MDBCol
              md="6"
              lg="3"
              className="border-sm-start-none border-start d-flex flex-row justify-content-center align-items-center "
            >
              {/* <div className="d-flex flex-row justify-content-center align-items-center  mb-1"> */}
                
                

                
              {/* <div className="d-flex  mt-5"> */}
                <MDBBtn  rounded  color="success" size="sm" className='mx-1'  onClick={() => handleApprove(item._id)}>
                 Accept
                </MDBBtn>

                <MDBBtn   rounded color="danger" size="sm" className='mx-1' onClick={()=>handleDelete(item._id)}>
                 Reject
                </MDBBtn>
               
              {/* </div> */}
              {/* </div> */}
              
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        </div>
      {/* </MDBCard> */}
    </MDBCol>
  </MDBRow>
))} 









 



 
 
</MDBContainer>


      {/* </div> */}
    </div>
    </>
  )
}

export default Employeejobrequests