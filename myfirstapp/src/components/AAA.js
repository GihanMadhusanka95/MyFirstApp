import React from 'react'

export default function () {

  const names = ['amal','kamal','anura','sumudu'];

  const namelist = names.map(e => 
    <h1>{e}</h1>
  )



  return (
    <div>

   {
    namelist
   }

    </div>
  )
}
