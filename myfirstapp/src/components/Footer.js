import React from 'react'
import './css files/color.css'




export default function Footer() {
  return (
    <> 
    <div className='ffg'>
    <div className="row">

    <div className="cb cl col-6">
         <span className='fe'> expresslankainfo@gmail.com</span> <br />
         <span className='fe'> +94 70010009000</span>  <br />
         <span className='fe'> No 63/1 ,  T.B jayah Mawatha colombo </span> <br />
         <span className='fe'> Payment Method</span> <br />
         <div className="row">
          <div className="col-4"> <img className='imagehandle' src="./images/Visa.svg" alt="visa card" />
          <img className='imagehandle' src="./images/American Express.svg" alt="american express card" /></div>
          <div className="col-4"></div>
          <div className="col-4"></div>
          
          </div>
    </div>

    <div className="cd  cl col-6 ">
         <span className='fe'> Office open hours </span> <br />
         <span className='fe'>  </span>
         <span className='fe'> Online Support  </span> <br />
         <span className='fe'>  Follow us On </span>  <br />

    </div>
  </div>

  </div>
    
    </>
  )
}
