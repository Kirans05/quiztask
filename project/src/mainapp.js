import { Button } from '@mui/material'
import React, { useState } from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import App from './app'
import Finalresult from './finalresult'
import Home from './home'
import "./mainapp.css"


function Mainapp() {
    const [finalres,setfinalres] = useState(0) 
    const sendfinaldata = (values) => {
        console.log(values)
        const filteredvalues = values.filter(item => item.answer == 1)
        console.log(filteredvalues)
        setfinalres(filteredvalues.length)

    }
    console.log(finalres)
  return (
    <div>
        <BrowserRouter>
           <div className='links'>
           <NavLink to="/home"  className={({isActive})=>isActive?"active":"notactive"}><Button variant='contained' >Home</Button></NavLink>
            <br />
            <NavLink to="/test" className={({isActive})=>isActive?"active":"notactive"}><Button variant='contained' color='warning'>TakeTest</Button></NavLink>
           </div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/test" element={<App sendfinaldata={sendfinaldata}/>} />
                <Route path="/finalResult" element={<Finalresult finalres={finalres}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Mainapp