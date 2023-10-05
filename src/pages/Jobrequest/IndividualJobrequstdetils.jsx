import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
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
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const IndividualJobrequstdetils = () => {
  

  const navigate=useNavigate()
  const [user,setUser]=useState([])

  const {id}=useParams()

  // console.log("****id*****",id);
   

  const getUserhostedJobById=async()=>{
    try {
      const response=await axios.get(`http://localhost:3000/agency/getuserbyid/${id}`)

      if(response.status==200){
        // console.log(response.data.Data);
        setUser([response.data.Data])
      }
      



    } catch (error) {
      console.log("******error********",error);
    }
    



  }

  useEffect(()=>{
    getUserhostedJobById()
  },id)


  console.log(user);



  return (

    <>

    <Navigation/>
    
    
    <div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
      
    <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:"#425a71"}} className="sidebar_div">
          <Sidebar />

         </div>


         <div  className="display" style={{width:'80%',display:'flex',justifyContent:"center",flexWrap:"wrap",}}>

{
    user.map((item)=>( 

        <section style={{ backgroundColor: '#c7c1c1',width:"80%" }}>
        <MDBContainer className="py-5"  >
          
  
          <MDBRow >
          
            <MDBCol lg="12"  style={{display:"flex",justifyContent:"center"}} >
              <MDBCard className="" style={{minWidth:"38rem "}}>
                <MDBCardBody style={{width:"37rem"}} >
                <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> JobTitle</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.jobtitle}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText> Job category</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.category}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Job requsest id</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item._id}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Userid</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.userId._id}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>

                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.userId.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  
                  
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted">{item.userId.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phonenumber</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.phonenumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Place</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.place}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}>
                      <MDBCardText className="text-muted ">{item.address}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Total employees</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}  >
                      <MDBCardText className="text-muted ">{item.numberofemployees}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                   <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Show Suitable employees</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9" style={{display:"flex",justifyContent:"center"}}  >
                      <MDBBtn size='sm' onClick={()=>navigate(`/simileremployees/${item._id}`)} >Click Here</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                    
                  
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

export default IndividualJobrequstdetils