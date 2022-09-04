import './App.css';
import Home from './components/Home';
import AdminPannel from './components/AdminPannel';
import {Route ,Routes} from 'react-router-dom'

import Header from './components/Header';
import CreateNotice from './components/CreateNotice';
import CusViewNotice from './components/CusViewNotice';
import TrainDetailsForm from './components/TrainDetailsForm';



function App() {
  return (
   
   <Routes>
       <Route path = "/" element={<Home/>}/>

       <Route path = "/head" element={<Header/>}/>

       <Route path = "/Admin" element={<AdminPannel/>}/>

       <Route path = "/notice" element ={<CreateNotice/>} />

       <Route path = "/Note" element ={<CusViewNotice/>} />

       <Route path = "/trainDetails" element = {<TrainDetailsForm/> }/>


   </Routes>
          
  );
}

export default App;
