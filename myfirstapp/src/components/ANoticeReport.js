import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';
import Footer from './Footer';


export default function ANoticeReport() {

    const[Ndetails,setNdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/Notice`).then(res=> {
            setNdetails(res.data.existingNotice);
            console.log(res.data.existingNotice);
         

        })
            .catch(err => {
                console.log(err);
            })
    },[])

    const repotGen=()=>{

      window.print();

 }

   const deleteMyEmployee =((id)=>{


   axios.delete(`http://localhost:8000/Notice/delete/${id}`).then((res)=>{
   alert("delete succesfull")
   });
  



   })

   

  return (
    <div>
     
      <div> < Header/></div>

        <br />
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                 <th scope="col">Date</th>
                                <th scope="col">Notice</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                          Ndetails.map ( (bk) => { 
                             return <tr>


                                <td>{bk.Date}</td>
                                <td>{bk.Notice}</td> 
                             

                    




                            </tr>
                            
                           }
                            
                            )
                            }
                        </tbody>
                    </table>
                    <br />
                    
                    <button class="btn btn-success" onClick={repotGen}>Print</button>
                </div>
            </div>

            <div>  <Footer/> </div>
    </div>
  )
}