import { Button } from '@mui/material'
import React, { useState } from 'react'
import "./question.css"


function Quetion({item,takedata}){
    const [btntap,setbtntap] = useState(null)
    const [ans,setans] = useState(0)
    const btnclick = (event) => {
        setbtntap(event.target.value)
        // alert("hi")
        if(item.correct == event.target.value){
            takedata(item,1)
        }
        else{
            takedata(item,0)
        }

    }
    return (
    <div className='qestionbank'>
        <h4 className='questionbankqest'>{item.question}</h4>
        {
            btntap == null ? item.answers.map((btnvalues,index) => {
                return (<Button c key={index} className="answersbtn" value={btnvalues} onClick={(event)=>btnclick(event)}  color="secondary" variant='contained'>{btnvalues}</Button>)
            })
            :<Button value={btntap} variant="contained" color="success">{btntap}</Button>
        } 
    </div>
  )
}

export default Quetion