import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../componets/Navigarion';
import Sidebar from '../../componets/sidebar/Sidebar';
import { MDBBtn } from 'mdb-react-ui-kit';
const ApprovedEmployees = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const GetApprovedEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/agency/approvedemployees");
      console.log(response.data.Data);
      setUsers([...response.data.Data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetApprovedEmployees();
  }, []);

  // Function to filter employees based on the search query
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Navigation />

      <div style={{ height: '100vh', display: 'flex', flexDirection: 'row' }} className="main_div">
        <div style={{ width: '20%', position: 'sticky', top: '0', left: '0', paddingTop: '3%', backgroundColor: "#425a71" }} className="sidebar_div">
          <Sidebar />
        </div>

        <div className="display" style={{ width: '80%', }}>
          {/* Search input and button */}
          <div style={{ margin:"3rem 0",width:"100%",height:"5%",display:"flex",justifyContent:"center",position:"sticky",zIndex:"1000" }}>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{border:"none",backgroundColor:"#e6e3e3",borderRadius:"2rem",textAlign:"center"}}
              onMouseEnter={(e) => { e.target.style.border = "2px solid #65a1b5"; }}
              onMouseLeave={(e) => { e.target.style.border = "none"; }}
            />
            {/* <button onClick={() => setSearchQuery('')}>Clear</button> */}
            <MDBBtn rounded className='mx-2' color='info' onClick={() => setSearchQuery('')}>Clear</MDBBtn>
          </div>

          {/* Conditionally render all users or filtered users */}
          <div className="items_div" style={{display:'flex',width:'100%',flexWrap:'wrap',height:"84%",overflow:'auto'}}>
          {searchQuery === '' ? (
            users.map((user) => (
              <div key={user._id} className='card' style={{ height: "14rem", width: "5rem", margin: "2rem 2rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", display: "flex", flexDirection: "row", justifyContent: "space-around" }}  onClick={()=>navigate(`/Approvedsingleemployee/${user._id}`)}>
                <div className="image_div">
                  <img src={user.imagefile} alt="Curved Image" style={{ borderRadius: "50%", maxWidth: "160px", maxHeight: "250px", padding: ".4rem", width: "100%", height: "90%", objectFit: "cover" }} />
                </div>
                <div className="content_div" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                  <h3>{user.name}</h3>
                  <p>{user.phonenumber}</p>
                  <h6 style={{ color: "violet" }}>{user.Aadharnumber}</h6>
                </div>
              </div>
            ))
          ) : (
            filteredUsers.map((user) => (
              <div key={user._id} className='card' style={{ height: "14rem", width: "5rem", margin: "2rem 2rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", display: "flex", flexDirection: "row", justifyContent: "space-around" }}  onClick={()=>navigate(`/Approvedsingleemployee/${user._id}`)}>
                <div className="image_div">
                  <img src={user.imagefile} alt="Curved Image" style={{ borderRadius: "50%", maxWidth: "160px", maxHeight: "250px", padding: ".4rem", width: "100%", height: "90%", objectFit: "cover" }} />
                </div>
                <div className="content_div" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                  <h3>{user.name}</h3>
                  <p>{user.phonenumber}</p>
                  <h6 style={{ color: "violet" }}>{user.Aadharnumber}</h6>
                </div>
              </div>
            ))
          )}
          </div>  
        </div>
      </div>
    </>
  );
}

export default ApprovedEmployees;
