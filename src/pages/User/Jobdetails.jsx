import React, { useEffect, useState } from "react";
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
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import "./jobdetails.css";
import Header from "../../componets/Header/Header";
import axios from "axios";

const Jobdetails = () => {


  const [unapprovedjobs,Setunapprovedjobs]=useState([])
  const [approvedjobs,Setapprovedjob]=useState([])
  const [completesjob,Setcompletedjob]=useState([])


  const id=localStorage.getItem("userid")





  // function to fetch data fron db 

      //  ------------>unapprovedjobs------------->

      const GetUnApprovedJob=async()=>{

        try {
          
        const response=await axios.get(`http://localhost:3000/user/unapprovedjob/${id}`)
          // console.log(response);

          if(response.status==200){
            Setunapprovedjobs([...response.data.Data])
          }


        } catch (error) {
          console.log(error);
        }

      }



      // ------------>approvedjobs------------->

      const GetapprovedJobs=async()=>{
        try {
          const response=await axios.get(`http://localhost:3000/user/approvedjobs/${id}`)
          console.log(response);
          if(response.status==200){
            Setapprovedjob([...response.data.Data])
          }
        } catch (error) {
          console.log("error",error)
        }
      }

          // ------------>completedjobs------------->

     const GetCompletedjobs=async()=>{
      try {
        const response=await axios.get(`http://localhost:3000/user/completedjobs/${id}`)
        // console.log(response)
        if(response.status==200){
          Setcompletedjob([...response.data.Data])
        }
      } catch (error) {
        console.log(error)
      }
     }     
// payment to agency    

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
        const verifyUrl = "http://localhost:8080/user/verifypayment/agency";
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

const handlePayment=async(totalworkers,days)=>{
  try {
    const orderUrl="http://localhost:3000/user/payment"
    // change req.body after working
    			const { data } = await axios.post(orderUrl, { amount:totalworkers*days*1000 });

    // const {data}=await axios.post(orderUrl)
    console.log(data);
    initPayment(data.data);


  } catch (error) {
    console.log("error",error);
  }
} 


 useEffect(()=>{
  GetUnApprovedJob()
 },[])    

 useEffect(()=>{
   GetapprovedJobs()
 },[])
 
 useEffect(()=>{
  GetCompletedjobs()
 },[])
  // console.log("user id",id)
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
// console.log("unapprovedjobs",unapprovedjobs)
  return (
    <>
      <div id="Wrapping">
        <div id="content">
          <Header />

          <div>
            <MDBTabs
              className="mb-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MDBTabsItem>
                <MDBTabsLink
                  className="tab-link"
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    color: basicActive === 'tab1' ? 'blue' : 'white',
                    fontFamily:'Saira Condensed',
                    letterSpacing:"1.5px"
                  }}
                >
                  UNAPPROVROVED REQUEST{" "}
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  className="tab-link"
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    color: basicActive === 'tab2' ? 'blue' : 'white',
                    fontFamily:'Saira Condensed',
                    letterSpacing:"1.5px"
                  }}
                >
                  APPROVROVED REQUEST
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                className="tab-link"
                  onClick={() => handleBasicClick("tab3")}
                  active={basicActive === "tab3"}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    color: basicActive === 'tab3' ? 'blue' : 'white',
                    fontFamily:'Saira Condensed',
                    letterSpacing:"1.5px"
                  }}
                >
                  COMPLETED REQUEST
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
              <MDBContainer fluid>

{unapprovedjobs.map((item)=>(
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
        <MDBCol style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <h5 className='mt-1'>{item.userId.name}</h5>
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
            <span>{item.place}</span><br />
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span><br />
            
            
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span><br />
            
            
          </div>
          <p className="text-truncate mb-4 mb-md-0  ">
         {item.jobtitle}
          </p><br />

          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p><br />
        </MDBCol>
        
      </MDBRow>
    </MDBCardBody>
    </div>
  {/* </MDBCard> */}
</MDBCol>
</MDBRow>
))}















</MDBContainer>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                
              <MDBContainer fluid>

{approvedjobs.map((item)=>(
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
        <MDBCol md="6" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <h5 className='mt-1'>{item.userId.name}</h5>
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
            <span>{item.place}</span><br />
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span><br />
            
            
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span><br />
            
            
          </div>
          <p className="text-truncate mb-4 mb-md-0  ">
         {item.jobtitle}
          </p><br />

          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p><br />
        </MDBCol>
        <MDBCol
          md="6"
          lg="3"
          className="border-sm-start-none border-start"
        >
          <div className="d-flex flex-row justify-content-center align-items-center mb-1 ">
            
            

            
          {/* <div className="d-flex flex-column mt-5"> */}
            <MDBBtn  color="success" onClick={()=>handlePayment(item.numberofemployees,item.numberofdays)} style={{marginTop:"5rem"}}>
             P a y
            </MDBBtn>
           
          {/* </div> */}
          </div>
          
        </MDBCol>
        
      </MDBRow>
    </MDBCardBody>
    </div>
  {/* </MDBCard> */}
</MDBCol>
</MDBRow>
))}















</MDBContainer>







              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab3"}>
                
              <MDBContainer fluid>

{completesjob.map((item)=>(
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
        <MDBCol style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <h5 className='mt-1'>{item.userId.name}</h5>
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
            <span>{item.place}</span><br />
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span><br />
            
            
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span><br />
            
            
          </div>
          <p className="text-truncate mb-4 mb-md-0  ">
         {item.jobtitle}
          </p><br />

          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p><br />
        </MDBCol>
        
      </MDBRow>
    </MDBCardBody>
    </div>
  {/* </MDBCard> */}
</MDBCol>
</MDBRow>
))}















</MDBContainer>









              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;
