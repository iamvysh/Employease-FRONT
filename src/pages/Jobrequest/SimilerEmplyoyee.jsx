import React, { useEffect, useState } from 'react'
import Navigation from '../../componets/Navigarion'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MDBBtn } from 'mdb-react-ui-kit';


const SimilerEmplyoyee = () => {

    const {id}=useParams()
    const [users,setusers]=useState([])

    // console.log(id,"******id********");

    const getUsers=async()=>{
      try {
        const response=await axios.get(`http://localhost:3000/agency/jobs/getsimileremployees/${id}`)
        // console.log("****response*******",response);
        if(response.status==200){
          setusers(response.data.data)
        }else{
          console.log("no employees found");
        }
      } catch (error) {
        console.log(error);
      }
    }
     
    useEffect(()=>{
      getUsers()
    },[id])

// console.log(users);

const data = users.map(user => user._id);
// console.log(userIds);


const SendJobDetailstoEmployees=async()=>{
  try {

    const response=await axios.put("http://localhost:3000/agency/sendjobrequesttoemployees",{data,id})
      


  } catch (error) {
    
  }
}

  return (
    <>

    <Navigation/>

    <div style={{width:"100%",height:"auto",display:"flex"}}>


    <div className="items_div" style={{display:'flex',width:'80%',flexWrap:'wrap',height:"84%",overflow:'auto'}}>
          {
             users.map((user) => ( 
              <div  className='card' style={{ height: "14rem", width: "5rem", margin: "2rem 2rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", display: "flex", flexDirection: "row", justifyContent: "space-around" }}  onClick={()=>navigate(`/Approvedsingleemployee/${user._id}`)}>
                <div className="image_div">
                  <img src={user.imagefile} alt="Curved Image" style={{ borderRadius: "8%", maxWidth: "160px", maxHeight: "250px", padding: ".4rem", width: "100%", height: "90%", objectFit: "cover" }} />
                </div>
                <div className="content_div" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                  <h3>{user.name}</h3>
                  <p>{user.phonenumber}</p>
                  <h6 style={{ color: "violet" }}>{user.category}</h6>
                </div>
              </div>
            )) 
          
           } 
          </div>  

          <div className="button_div" style={{width:"20%",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

                <div>
                <MDBBtn  onClick={SendJobDetailstoEmployees} size='lg' outline rounded color='success' >Sent Request to  all</MDBBtn>

                </div>


          </div>


    </div>



    </>
  )
}

export default SimilerEmplyoyee