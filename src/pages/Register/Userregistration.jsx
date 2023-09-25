import React from 'react'
import Navigation from '../../componets/Navigarion'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth,provider} from '../../Apis/Firebase'
import { MDBBtn } from 'mdb-react-ui-kit';
const Userregistration = () => {

    const handlelogin=async()=>{
        console.log('yyy');
        try{
            console.log('tttttt');
            const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const user = data.user;
      console.log(credential);
      console.log(user);
      
        }catch(err){
            console.log(err);
        }
    }

//    const  handlelo=()=>{
//   console.log("hy");


//     }
  return (
    <>
     
     <Navigation/>

     {/* <button onClick={()=>handlelogin()}>fshj</button> */}

     {/* <button onClick={handlelo}>auth</button> */}

     <MDBBtn onClick={handlelogin}>login</MDBBtn> 
    </>
  )
}

export default Userregistration
