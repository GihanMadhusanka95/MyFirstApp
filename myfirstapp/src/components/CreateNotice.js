import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'


export default function CreateNotice() {

const [date,setDate] = useState('');
const [Notice,setNotice] = useState('');


const handleClick = async (e) => {

   console.log(date)

   alert("Notice Added Succesfully");
   
    e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/Notice/save',{date:date,Notice:Notice});

      console.log(resp.data);

   } catch(error) {
     console.log(error.response);
   }
};



 
  return (

     <>

   <div>
        <Header/>
     </div>      
                              
              
   <div className="formdiv">

   <h2> Create Notice </h2>

   <form action="">

                              
<label for="date">Date:</label>  <br />
          <input type="date"
           id='Date'
           value={date}
           onChange = {(e) =>setDate(e.target.value)} />
   
    <br />
    <br />
    <br />




<label for="date">Notice:</label>  <br />
          {/* <input type="text"
           id='Notice'
           value={Notice}
           onChange = {(e) =>setNotice(e.target.value)} /> */}
<br />
<textarea name="" id="" cols="60" rows="10"
value={Notice}
onChange = {(e) =>setNotice(e.target.value)}></textarea>
<br />

      <button class="btn btn-primary  by" onClick={handleClick} > Add </button>


</form>
</div>                  

       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
