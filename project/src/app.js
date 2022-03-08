import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Quetion from './quetion'
// import index from "./component/index"
import "./app.css"
import {Button} from "@mui/material" 



function App({sendfinaldata}) {
  const data = [
    {
      question:
        "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
      answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
      correct: "Richard Branson",
      questionId: "099099",
    },
    {
      question:
        'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
      answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
      correct: "Wales",
      questionId: "183452",
    }, {
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answers: ["HTC", "Oculus", "Google", "Razer"],
      correct: "HTC",
      questionId: "267908",
    },
    {
      question: "What's the name of Batman's  parents?",
      answers: [
        "Thomas & Martha",
        "Joey & Jackie",
        "Jason & Sarah",
        "Todd & Mira",
      ],
      correct: "Thomas & Martha",
      questionId: "333247",
    },
    {
      question: "What is the most common surname Wales?",
      answers: ["Jones", "Williams", "Davies", "Evans"],
      correct: "Jones",
      questionId: "496293",
    },
  ]
  const [listdata,setlistdata] = useState([])

  

  const takedata = (list,ans) => {
    console.log(ans)
    const values = [...listdata,{questid:list.questionId,answer:ans}]
    setlistdata(values)
  }

  return (
    <div>
      <h1 className='displaydata'>Question Displaying </h1>
      {
        data.map((item,index) =>{
          return <Quetion key={index} item={item} takedata={takedata}/>
        })
      }
      <br />
     <div className='NavLink'>
     <NavLink to="/finalResult"  className={({isActive})=>isActive?"finalactive":"finalnotactive"}><Button variant='contained' onClick={()=>sendfinaldata(listdata)}>Submit</Button></NavLink>
       </div>
    </div>
  )
}

export default App