import React from 'react'
import { useEffect  } from 'react'
import { useState } from 'react'
import axios, { Axios } from 'axios'

export default function Calculate() {
  
  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
        console.log(Response.data)
    })
  })
  
    return (
   
           <>










           </>

  )
}

