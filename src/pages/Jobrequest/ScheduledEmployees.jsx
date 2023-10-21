import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ScheduledEmployees = () => {

    const {id}=useParams()

    const [employees,Setemployees]=useState([])



    const GetAllEmployees=async()=>{
        try {
            const respponse=await axios.get(`http://localhost:3000/agency/getuserbyid/${id}`)  
            console.log("response",respponse.data.Data.scheduledemployees);
            if(respponse.status==200){
                Setemployees([...respponse.data.Data.scheduledemployees])
            }


        } catch (error) {
            console.log(re);
        }
    }

 useEffect(()=>{
    GetAllEmployees()
 },[id])

console.log(employees)

  return (
    <>

<Navigation />

<div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
  <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:"#425a71"}} className="sidebar_div">
    <Sidebar />

   </div>

    <div  className="display" style={{width:'80%',display:'flex',flexWrap:"wrap",}}>

          


          { employees.map((item)=>(

<MDBContainer>
<MDBRow className="justify-content-center" >
  <MDBCol md="9" lg="9" xl="5" className="mt-4" style={{boxShadow:" -2px 19px 45px -12px rgba(0,0,0,0.48)",width:"22rem"}}>
    <MDBCard style={{ borderRadius: '15px' }}>
      <MDBCardBody className="p-2">
        <div className="d-flex text-black">
          <div className="flex-shrink-0">
            <MDBCardImage
              style={{ width: '180px', borderRadius: '10px' }}
              src={item.imagefile}
              alt='Generic placeholder image'
              fluid />
          </div>
          <div className="flex-grow-1 ms-3">
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardText>{item._id}</MDBCardText>


            
            <div className="d-flex pt-1">
              <MDBBtn className="flex-grow-1">Pay</MDBBtn>
            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
</MDBContainer>

          ))


          }
   


    </div>
</div>
    
    
    
    </>
  )
}

export default ScheduledEmployees