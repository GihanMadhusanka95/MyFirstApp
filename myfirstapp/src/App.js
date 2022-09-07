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

       <Route path="/editNotice" element ={<EditNotice/>} />

       <Route path="/noticeReport" element ={<NoticeReport/>} />


   </Routes>
          
  );
}

export default App;
