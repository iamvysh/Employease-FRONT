
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom'



import Navigarion from './componets/Navigarion';
import Home from './pages/Home';
import CommonRegister from './pages/Register/CommonRegister';
import EmployeeRegister from './pages/Register/EmployeeRegister';
import AgencyRegister from './pages/Register/AgencyRegister';
import Agenlogin from './pages/Login/Agentlogin/Agenlogin';
import Agencyhome from './pages/AgencyHome.jsx/Agencyhome';
import EmployeeRequest from './pages/EmployeeReqest/EmployeeRequest';
import IndividualReqest from './pages/individualRequest/IndividualReqest';
import Approvedemployyes from './pages/ApprovedEmployees/Approvedemployyes';
import ApprovedSingleEmplyee from './pages/ApprovedSingleEmplyee/ApprovedSingleEmplyee';
import Employeelogin from './pages/Login/Employeelogin/Employeelogin';
import Userregistration from './pages/Register/Userregistration';

function App() {
  

  return (
    <>
    <Routes>
    
    <Route path='/' element={<Home/>}  />
    <Route path='/commonregister' element={<CommonRegister/>}/>
    <Route path='/employeeregister' element={<EmployeeRegister/>}/>
    <Route path="/agencyregister" element={<AgencyRegister/>} />
    <Route path='/agencylogin'   element={<Agenlogin/>    } />
    <Route path='/agencyhome' element={<Agencyhome/>} />
    <Route path='/Employeerequest' element={<EmployeeRequest/>}/>
    <Route path='/indvidualusers/:id' element={<IndividualReqest/>}/>
    <Route path='/approvedemployees' element={<Approvedemployyes/>}/>
    <Route path='/Approvedsingleemployee/:id' element={<ApprovedSingleEmplyee/>}/>
    <Route path="/employeelogin" element={<Employeelogin/>}/>
    <Route path='/userregistration' element={<Userregistration/>}/>
    </Routes>
   
    </>
  )
}

export default App
