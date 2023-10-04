import React from "react";
import Navigation from "../../componets/Navigarion";
import Sidebar from "../../componets/sidebar/Sidebar";
import AgencyCard from "../../componets/AgencyCard/AgencyCard";


const Agencyhome = () => {

  const arr=[
    {
      image:"https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:"Employee request",
      link:"/Employeerequest"
    },
    {
      image:"https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:"Approved employees",
      link:"/approvedemployees"

    },
    {
      image:"https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:" Users ",
      // link:"/"
    },
    {
      image:"https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title:"Job request",
      link:"/jobrequest"
    }
  ]
  return (
    <>
      <Navigation />

      <div style={{height:'100vh',display:'flex',flexDirection:'row'}} className="main_div">
        <div  style={{width:'20%',position:'sticky',top:'0',left:'0',paddingTop:'3%',backgroundColor:"#425a71"}} className="sidebar_div">
          <Sidebar />

         </div>

          <div  className="display" style={{width:'80%',display:'flex',flexWrap:"wrap",}}>

          {arr.map((item, index) => (
            <>
            <AgencyCard key={index} {...item} />
            </>
          ))}
            


          </div>
      </div>
    </>
  );
};

export default Agencyhome;
