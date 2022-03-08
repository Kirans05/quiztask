import { Button } from '@mui/material'
import React from 'react'
import "./finalresult.css"

function Finalresult({finalres}) {
  return (
    <div className='finalresultvaluse'>
      <h1>you scored {finalres} /5 in the Test</h1>
      <Button variant='outlined' color='warning' className='anchorbtn'><a href="/test" >take test again</a></Button>
      <Button  variant='outlined' color='success'><a href="/home" >go to home</a></Button>
      
    </div>
  )
}

export default Finalresult