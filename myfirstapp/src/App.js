import './App.css';
import Home from './components/Home';
import AdminPannel from './components/AdminPannel';
import {Route ,Routes} from 'react-router-dom'

import Header from './components/Header';
import CreateNotice from './components/CreateNotice';
import CusViewNotice from './components/CusViewNotice';
import TrainDetailsForm from './components/TrainDetailsForm';
import Feedback from './components/Feedback';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import EditTrainDetails from './components/EditTrainDetails';
import EditNotice from './components/EditNotice';
import NoticeReport from './components/NoticeReport';

import EmpApplication from './components/EmpApplication';
//import TrainDetilsAdminView from './components/TrainDetilsAdminView';
import PublishJob from './components/PublishJob';
import RecivedApplication from './components/RecivedApplication';
//import Calculate from './components/Calculate';
import TrainDetailsList from './components/TrainDetailsList';


import TrainUpdate from './components/TrainUpdate';
import EmployeeDetailsList from './components/EmployeeDetailsList';
import NoticeDetailsList from './components/NoticeDetailsList';

import UserProfileView from './components/UserProfileView';
import ViewShedule from './components/ViewShedule';

import AddJob from './components/AddJob';
import JobVacancy from './components/JobVacancy';

import GetOneShedule from './components/GetOneShedule';

import UsersDetailsList from './components/UsersDetailsList'

import Galery from './components/Galery';

import SelectTicket from './components/SelectTicket';

import UserEdit from './components/UserEdit';
import EmployeeEdit from './components/EmployeeEdit'

import TrainDetailsUp from './components/TrainDetailsUp';

import ContactUs from './components/ContactUs';

import CheckValidation from './components/CheckValidation';




function App() {
  return (
   
   <Routes>
       <Route path = "/" element={<Home/>}/>

       <Route path = "/head" element={<Header/>}/>

       <Route path = "/Admin" element={<AdminPannel/>}/>

       <Route path = "/notice" element ={<CreateNotice/>} />

       <Route path = "/Note" element ={<CusViewNotice/>} />

       <Route path = "/trainDetails" element = {<TrainDetailsForm/> }/>

       <Route path="/addFeedback" element ={<Feedback/>} />

       <Route path="/profile" element ={<UserProfile/>} />

       <Route path="/Login" element ={<Login/>} />

       <Route path="/register" element ={<Register/>} />




       <Route path="/editTrainDetails" element ={<EditTrainDetails/>} />

       <Route path="/editNotice/:id" element ={<EditNotice/>} />

       <Route path="/noticeReport" element ={<NoticeReport/>} />



       <Route path= '/PublishJob' element ={<PublishJob/>} />

       <Route path= '/recived' element ={<RecivedApplication/>} />

      

       <Route path= '/viewtrain' element ={<TrainDetailsList/>} />

      

      

       <Route path= '/TrainEdit' element ={<TrainUpdate/>} />

       <Route path= '/viewemployee' element ={<EmployeeDetailsList/>} />

       <Route path= '/vieweNotice' element ={<NoticeDetailsList/>} />

       <Route path= '/UserProfile' element ={<UserProfileView/>} />


// Home page Components 

       // view Shedule 
       <Route path= '/Shedule' element ={<ViewShedule/>} />






// Employee Components 

       <Route path= '/addjob' element ={<AddJob/>} />

       <Route path= '/vacancy' element ={<JobVacancy/>} />

       <Route path= '/empApplication' element ={<EmpApplication/>} />

       <Route path= '/viewemployee' element ={<EmployeeDetailsList/>} />
       

//train shedule 

    <Route path= '/getone' element ={<GetOneShedule/>} />

    <Route path= '/getone/:id' element ={<GetOneShedule/>} />



//  Admin Manage Users 

  <Route path= '/allusers' element ={<UsersDetailsList/>} />



// Galery 

  <Route path= '/galery' element ={<Galery/>} />



// Booking Process

<Route path= '/selectTicket' element ={<SelectTicket/>} />

<Route path= '/userEdit/:id' element ={<UserEdit/>} />

<Route path= '/employeeEdit/:id' element ={<EmployeeEdit/>} />

<Route path= '/upTrain' element ={<TrainDetailsUp/>} />

<Route path= '/contactus' element ={<ContactUs/>} />


// validation check 

<Route path= '/val' element ={<CheckValidation/>} />

   </Routes>
          
  );
}

export default App;
