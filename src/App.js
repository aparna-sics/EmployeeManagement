import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


import HrLogin from './HrLogin';
import RegistrationForm from './RegistrationForm';
import HrDashboard from './HrDashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
    {/* // <Routes>
    
    //   <Route path='/' element={<HrLogin/>}/>
    // <Route path='/regForm' element={<RegistrationForm/>}/>
    // <Route path='/Hrdash' element={<HrDashboard/>}/> */}
    <RegistrationForm/>
     {/* <HrLogin/> */}
     {/* <HrDashboard/> */}
       
    
    {/* // </Routes> */}
    </div>
    // </BrowserRouter>
   
    
  );
}

export default App;
