
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom'



import Navigarion from './componets/Navigarion';
import Home from './pages/Home';
import CommonRegister from './pages/Register/CommonRegister';
import EmployeeRegister from './pages/Register/EmployeeRegister';

function App() {
  

  return (
    <>
    <Routes>
    
    <Route path='/' element={<Home/>}  />
    <Route path='/commonregister' element={<CommonRegister/>}/>
    <Route path='/employeeregister' element={<EmployeeRegister/>}/>


    </Routes>
   
    </>
  )
}

export default App
