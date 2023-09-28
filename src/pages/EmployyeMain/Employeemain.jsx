import React from "react";
import Navigation from "../../componets/Navigarion";
import "./Emploeemail.css"
import Typewriter from "typewriter-effect";

const Employeemain = () => {

  
  return (
    <>
      <Navigation  />

      <div
      style={{
        position:'fixed',
        top:'19%',left:'13%'
        
        
      }}
      
      >

        <h2 id="head" >
          
          <Typewriter
          options={{
            autoStart:true,
            loop:true,
            delay:50,
            strings:["HEY  EMPLOYEE!!!"," WELCOME TO EMPLOYEASE"]
          }}
          
          />
          </h2>
      </div>

      <div
        className="main"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundImage:`url("https://st3.depositphotos.com/6171310/37268/v/450/depositphotos_372688726-stock-illustration-beautiful-wallpaper-splash-watercolor-multicolor.jpg")`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          
        }}
      >
        <div
          className="profile_card"
          id="profile"
          style={{
            height: "15rem",
            width: "20rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:"9px",
            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            transition:"all .5s linear"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10rem"
            height="10rem"
            fill="#8D75EE"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>

          <h3>Profile</h3>
        </div>

        <div
          className="wallet_card"
          id="profile"

          style={{
            height: "15rem",
            width: "20rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:"9px",
            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            transition:"all .5s linear"

            
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10rem"
            height="10rem"
            fill="#8D75EE"
            class="bi bi-wallet"
            viewBox="0 0 16 16"
          >
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
          </svg>
          <h3>Wallet</h3>
        </div>

        <div
          className="work_history"
          id="profile"

          style={{
            height: "15rem",
            width: "20rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:"9px",
            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            transition:"all .5s linear"

          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12rem"
            height="12rem"
            fill="#8D75EE"
            class="bi bi-list-task"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fill-rule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>

          <h3>New Jobs</h3>
        </div>
      </div>
    </>
  );
};

export default Employeemain;
