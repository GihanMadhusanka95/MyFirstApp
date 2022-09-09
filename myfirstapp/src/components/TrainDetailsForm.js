import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css files/trainDforms.css'
import { useState } from 'react'
import axios from 'axios'

export default function TrainDetailsForm() {

  const [TrainName,setTrainName] = useState('');
  const [Day,setDay] = useState('');
  const [StartPoint,setStartPoint] = useState('');
  const [EndPoint,setEndPoint] = useState('');
  const [StartUpTime,setStartUpTime] = useState('');
  const [TrainType,setTrainType] = useState('');
  
  const handleClick = async (e) => {
     
      e.preventDefault();
     try{
  
        const resp = await axios.post('http://localhost:8000/TrainDetails/save',{
        TrainName:TrainName,
        Day:Day,
        StartPoint:StartPoint,
        EndPoint:EndPoint,
        StartUpTime:StartUpTime,
        TrainType:TrainType
    });
  
        console.log(resp.data);
  
     } catch(error) {
  console.log(error.response);
     }
  };



  return (
    <>
    
    <div> <Header/> </div>
    
    <div className='td'> </div>
         
    <form  className='frm' action="">  <br />

     <label className='lab'> Train Name :</label>
     <input className='ip form-control'
        type="text"
        id='TrainName'
        value={TrainName}
        onChange = {(e) =>setTrainName(e.target.value)}
       
        />

     <label className='lab'> Train Type : </label>
     <input className='ip form-control'
      type="text" 
     id='TrainType'
     value={TrainType}
     onChange = {(e) =>setTrainType(e.target.value)}/>

     <label className='lab'> Day : </label>
     <input  className='ip form-control'
      type="Day"
     id='Day'
     value={Day}
     onChange = {(e) =>setDay(e.target.value)} />

     <label className='lab'> Start Point :</label>
     <input className='ip form-control'
      type="StartPoint" 
     id='StartPoint'
     value={StartPoint}
     onChange = {(e) =>setStartPoint(e.target.value)}/>


     <label className='lab'> End Point : </label>
     <input className='ip form-control' 
     type="EndPoint" 
     id='EndPoint'
     value={EndPoint}
     onChange = {(e) =>setEndPoint(e.target.value)}/>


     <label className='lab'> Startup Time : </label>
     <input className='ip form-control'
      type="text" 
     id='StartUpTime'
     value={StartUpTime}
     onChange = {(e) =>setStartUpTime(e.target.value)}/>  <br />


    <button class="btn btn-primary  by" onClick={handleClick} > Add </button>

     </form>
     
    <div className='fu'> 
        <Footer/>
    </div>
    
    </>
  )
}
