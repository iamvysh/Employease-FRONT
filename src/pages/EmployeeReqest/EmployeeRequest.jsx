import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import Sidebar from '../../componets/sidebar/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 const EmployeeRequest = () => {

  const navigate=useNavigate()

  const [users,setUsers]=useState([])

 const GetunApprovedEmployees=async()=>{
  try {

    const response=await axios.get("http://localhost:3000/agency/unapprovedemployees")
    console.log(response.data.Data);
    setUsers([...response.data.Data])
    
  } catch (error) {
    
  }
}
  useEffect(()=>{
    GetunApprovedEmployees()
  },[setUsers])

console.log("gutsoigoisdgoig",users);

  return (
    <>
     <Navigation />

 <div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
  <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:"#425a71"}} className="sidebar_div">
    <Sidebar />

   </div>

    <div  className="display" style={{width:'80%',display:'flex',flexWrap:"wrap",}}>

      {
        users.map((user)=>(


      <div key={user._id} className='card' style={{height:"14rem",width:"5rem",margin:"2rem 2rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",display:"flex",flexDirection:"row",justifyContent:"space-around"}}
      
      onClick={()=>navigate(`/indvidualusers/${user._id}`)}>

        <div className="image_div">

      <img src={user.imagefile} alt="Curved Image" style={{borderRadius:"50%",maxWidth:"160px",maxHeigh:"250px",padding:".4rem",width:"100%",height:"90%" ,objectFit:"cover"}}/>
        </div>
        <div className="content_div" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <h3>{user.name}</h3>

      <p>{user.phonenumber}</p>
      <h6 style={{color:"violet"}}>{user.Aadharnumber}</h6>
        </div>
      </div>
        ))
      }


    
      


    </div>
  </div>
      
    </>
  )
}

export default EmployeeRequest
