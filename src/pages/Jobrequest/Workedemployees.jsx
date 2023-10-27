import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Workedemployees = () => {

    const {id}=useParams()

    const [employees,Setemployees]=useState([])
    const [days,Setdays]=useState(null)



    const GetAllEmployees=async()=>{
        try {
            const respponse=await axios.get(`http://localhost:3000/agency/getuserbyid/${id}`)  
            console.log("response of reppons",respponse.data.Data);
            // console.log("response",respponse.data.Data.scheduledemployees);
            if(respponse.status==200){
                Setemployees([...respponse.data.Data.scheduledemployees])
                Setdays(respponse.data.Data.numberofdays)
            }


        } catch (error) {
            console.log(error);
        }
    }
    const initPayment = (data) => {
      const options = {
        key: "rzp_test_LV91fGPNfR5JUO",
        amount: data.amount,
        currency: data.currency,
        // name: book.name,
        description: "Test Transaction",
        // image: book.img,
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyUrl = "http://localhost:8080/agency/verifypayment/employee";
            const { data } = await axios.post(verifyUrl, response);
            console.log(data);
            if(data.status==200){
              alert("payment successsfull")
            }
          } catch (error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };

const handlePayment=async()=>{
  try {
    const orderUrl="http://localhost:3000/agency/payment/employee"
    // change req.body after working
    			const { data } = await axios.post(orderUrl, { amount: days*800 });

    // const {data}=await axios.post(orderUrl)
    console.log(data);
    initPayment(data.data);


  } catch (error) {
    console.log("error",error);
  }
}    
 useEffect(()=>{
    GetAllEmployees()
 },[id])

console.log(employees)
console.log(days);

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
<MDBRow    style={{boxShadow:" -2px 19px 45px -12px rgba(0,0,0,0.48)",width:"24.5rem"} }
>
  <MDBCol md="9" lg="9" xl="5" className="mt-4" 
  // style={{boxShadow:" -2px 19px 45px -12px rgba(0,0,0,0.48)",width:"24.5rem"} }
  >
    <MDBCard style={{ borderRadius: '15px', }}>
      <MDBCardBody className="p-2">
        <div className="d-flex text-black">
          <div className="flex-shrink-0">
            <MDBCardImage
              style={{ width: '7rem', borderRadius: '10px' }}
              src={item.imagefile}
              alt='Generic placeholder image'
              fluid />
          </div>
          <div className="d-flex flex-column justify-content-evenly px-4">
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardText>{item._id}</MDBCardText>


            
            <div className="d-flex pt-1">
              <MDBBtn className="flex-grow-1" onClick={handlePayment}>Pay</MDBBtn>
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

export default Workedemployees