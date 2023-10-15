import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
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
  MDBTabsPane
  } from "mdb-react-ui-kit";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';




const Jobrequest = () => {


    const navigate=useNavigate()
    const [users,setUsers]=useState([])
    const [approvedjobs,setApprovedJob]=useState([])
    const [completedjobs,setCompletedjob]=useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    

    const GetUnApprovedJobs=async()=>{
        try {
            const response= await axios.get(`http://localhost:3000/agency/unapprovedjobs?page=${pageNumber}`)
            // console.log(response.data);
      // console.log(response.data.Data);
      setUsers([...response.data.Data])
      setNumberOfPages(response.data.totalPages);
      ;
        } catch (error) {
            console.log(error);
        }
    }



    const GetApprovedJobs=async()=>{
      try {
        const response=await axios("http://localhost:3000/agenccy/getallapprovedjobs")

        console.log("*********approveedjobs**********",response);
        if(response.status==200){
          setApprovedJob([...response.data.Data])
        }
      } catch (error) {
        console.log(error);
      }
    }


    const GetCompletedJobs=async()=>{
      try {
        const response=await axios.get("http://localhost:3000/agency/jobs/getallcompletedjobs")

        if(response.status==200){
          setCompletedjob([...response.data.Data])
        }
      } catch (error) {
        console.log(error);
      }
    }

 useEffect(()=>{
    GetUnApprovedJobs()
 },[pageNumber])

 useEffect(()=>{
  GetApprovedJobs()
 },[pageNumber])

useEffect(()=>{
  GetCompletedJobs()
},[pageNumber])

//  console.log("*********pagenuber*****",pageNumber);

console.log("*********completedeedjobs**********",completedjobs);

 const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

//  console.log("*********** pages",pages);

 const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  // tabs function

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <>
    <Navigation/>

    <div style={{ height: '100vh', display: 'flex', flexDirection: 'row' }} className="main_div">

    <div style={{ width: '20%', position: 'sticky', top: '0', left: '0', paddingTop: '3%', backgroundColor: "#425a71" }} className="sidebar_div">
          <Sidebar />
        </div>

        <div style={{width:"80%",}}>



        <MDBTabs className='d-flex justify-content-center      w-100'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} style={{color:"green",fontSize:".9rem"}}>
            New Requests
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{color:"orange",fontSize:".9rem"}}>
          Approved Requests

          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'} style={{color:"red",fontSize:".9rem"}}>
          Completed Requests
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>


        <h1 style={{textAlign:"center",marginTop:"1rem"}}>New&nbsp;&nbsp;&nbsp;Job&nbsp;&nbsp;&nbsp;Requests</h1>

<div style={{height:"40rem",width:"100%",}}>

{/* <div className='Job_Card'  >



</div> */}

<MDBContainer fluid>

{users.map((item)=>(
<MDBRow className="justify-content-center mb-0">
<MDBCol md="12" xl="10">
    {/* <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3" style={{ width: "55rem", important: "true" }}> */}
    <div className='shadow-0 border rounded-3 mt-4 mb-2' >
    <MDBCardBody style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", background:
item.scheduledemployees.length >= item.numberofemployees ? 'linear-gradient(to bottom, #1aff1a,#b3ffb3 )' : null  ,}}>  
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
            <span>{item.place}</span>
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p>
        </MDBCol>
        <MDBCol
          md="6"
          lg="3"
          className="border-sm-start-none border-start"
        >
          <div className="d-flex flex-row justify-content-center mb-1">
            
            

            
          <div className="d-flex flex-column mt-5">
            <MDBBtn   onClick={()=>navigate(`/jobrequest/${item._id}`)} color="primary" size="sm">
             View Details
            </MDBBtn>
           
          </div>
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

</div>
<div className="Paginate_items" style={{width:"100%",display:"flex",justifyContent:"center"}}>

   <MDBBtn  className='me-1' onClick={gotoPrevious}>Previous</MDBBtn>
       {pages.map((pageIndex) => (
<MDBBtn  className='me-1' key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
  {pageIndex + 1}
</MDBBtn>
))}
    <MDBBtn className='me-1' onClick={gotoNext}>Next</MDBBtn>

</div>








        </MDBTabsPane>





        
        <MDBTabsPane show={basicActive === 'tab2'}>


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
        <MDBCol md="6">
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
            <span>{item.place}</span>
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p>
        </MDBCol>
        <MDBCol
          md="6"
          lg="3"
          className="border-sm-start-none border-start"
        >
          <div className="d-flex flex-row justify-content-center mb-1">
            
            

            
          <div className="d-flex flex-column mt-5">
            <MDBBtn   onClick={()=>navigate(`/jobrequest/${item._id}`)} color="primary" size="sm">
             View Details
            </MDBBtn>
           
          </div>
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
        <MDBTabsPane show={basicActive === 'tab3'}>


        <MDBContainer fluid>

{completedjobs.map((item)=>(
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
            <span>{item.place}</span>
            <span className="text-primary"> • </span>
            <span>{item.phonenumber}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <div className="mb-2 text-muted small">
            <span>{item.address}</span>
            
            <span>
              
              <br />
            </span>
          </div>
          <p className="text-truncate mb-4 mb-md-0">
         {item.jobtitle}
          </p>
        </MDBCol>
        <MDBCol
          md="6"
          lg="3"
          className="border-sm-start-none border-start"
        >
          <div className="d-flex flex-row justify-content-center mb-1">
            
            

            
          <div className="d-flex flex-column mt-5">
            <MDBBtn   onClick={()=>navigate(`/jobrequest/${item._id}`)} color="primary" size="sm">
             View Details
            </MDBBtn>
           
          </div>
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
      </MDBTabsContent>






















       

        
        
        
        </div>

    </div>



    </>
  )
}

export default Jobrequest