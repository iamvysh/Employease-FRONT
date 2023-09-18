
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

    </Routes>
   
    </>
  )
}

export default App
