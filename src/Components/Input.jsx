import {React,useState } from 'react'

const Input=()=> 
{
   const [Data,setData] = useState(" ")

  return (
    <div>
     
    <div>
    <h2>
    Add TASKS
    </h2>
    </div>
    
    <div>
    <input
    type="text"
    placeholder="enter new task"
    onChange={(event)=> {setData(event.target.value)}}
    id="data"  
    />
    </div>

    <div>
        <select>
            <option> Pending </option> 
            <option> in process</option>
            <option> Completed</option>
        </select>

    </div> 
    </div>
  )
}
export default Input