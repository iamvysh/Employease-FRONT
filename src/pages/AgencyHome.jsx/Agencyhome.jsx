import React from "react";
import Navigation from "../../componets/Navigarion";
import Sidebar from "../../componets/sidebar/Sidebar";


const Agencyhome = () => {
  return (
    <>
      <Navigation />

      <div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
        <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:'blue'}} className="sidebar_div">
          <Sidebar />

         </div>

          <div  className="display" style={{width:'80%',backgroundColor:'yellow',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1>display</h1>
          </div>
      </div>
    </>
  );
};

export default Agencyhome;
