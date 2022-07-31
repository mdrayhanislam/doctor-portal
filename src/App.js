
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appointment from './Page/Appointment/Appointment';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SingUp from './Page/Login/SingUp';
import Footer from './Page/Shared/Footer';
import Navbar from './Page/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointments from './Page/Dashboard/MyAppointments';
import MyReview from './Page/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    
   <Navbar></Navbar>

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/singup' element={<SingUp></SingUp>}></Route>
  <Route path='/appointment' element={
    <RequireAuth>
      <Appointment></Appointment>
    </RequireAuth>
  }></Route>
  <Route path='/dashboard' element={
    <RequireAuth>
      <Dashboard></Dashboard>
    </RequireAuth>
  }>
    <Route index element={<MyAppointments></MyAppointments>}></Route>
    <Route path='review' element={<MyReview></MyReview>}></Route>
  </Route>
</Routes>
<Footer></Footer>
<ToastContainer />
    </div>

    
  );
}

export default App;
