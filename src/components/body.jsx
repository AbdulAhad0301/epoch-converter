import React from 'react';
import { mockComponent } from 'react-dom/test-utils';

import moment from "moment"


function Body(){

  const [ts, setTs] = React.useState(0)
  const [gmt, setGmt] = React.useState(5)
  const [min, setMin] = React.useState(0)
  const hour = 60*60*1000
  const minutes = 60*1000
  
  React.useEffect(function (){
    console.log ("State Change", "GMT")
  }
   , [gmt] 
  )

  const p = new Date((ts*1000) - (hour*5) + (hour*gmt) + (minutes*min)).toString();

  return (
    <div className = "div1">
      <p>Enter Time Stamp!</p>
      <input type="input" onChange={function (e){ setTs(e.target.value) }}/> <br/>
      <p>Human Readable Time</p>
      <input
        type= "text" 
        placeholder = "GMT" 
        onChange = {function (e){
          setGmt(e.target.value)
        }}
      />

        <input
          type = "text"
          placeholder = "minutes"
          onChange = {function (e){
            setMin(e.target.value)
          }}
        
        />
      <p>{moment(p).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>)

  }


  export default Body;
