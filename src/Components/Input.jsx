import { React, useState } from 'react'

const Input = () => {

  const [Data, setData] = useState(null)
  const [filter, setFilter] = useState('')
  const [Store, setStore] = useState([])
 // const [Show, setShow] = useState('')
  const [Check, setCheck] = useState([])

  
  const handlechange = (data) => 
  {
    var temp = {
      filter: filter,
      value: Data
    }

    if (data === "pending") 
    {
      if (filter === "pending") 
      {
        setCheck(Check => [...Check, temp]);
        console.log("check:",Check)
      }
    }
    else if (data==="completed")
    {
      if(filter=== "completed")
      {
        setCheck(Check => [...Check, temp]);
        console.log("check:",Check)
      }
    }
    else if(data=== "in-progress")
      {
        if(filter=== true)
        {
          setCheck(Check => [...Check, temp]);
          console.log("check:",Check)
        }
      }
      

    }
  const clearInput = () => {
    setData("")
  }

  const Add = (event) => {
    event.preventDefault()
    console.log("data:", Data)
    console.log("Filter:", filter)
    var temp = {
      filter: filter,
      value: Data
    }
    setStore(Store => [...Store, temp]);
    clearInput();
    console.log(Store)
  }
  return (
    <div className='container'>
      <form >
        <div>
          <h2>
            Add TASKS
          </h2>
        </div>

        <div>
          <input
            type="text"
            placeholder="enter new task"
            onChange={(event) => { setData(event.target.value) }}
            id="data"
            value={Data}
          />
        </div>

        <div >
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="pending"> Pending </option>
            <option value="in-progress"> in-progess</option>
            <option value="completed"> Completed</option>
          </select>

        </div>

        <div className='btns-stack'>
          <button onClick={Add} >+</button>
        </div>

        <br />

        <div>
          <h2>
            Filter
          </h2>
          <div className='Check'>
            <input onChange={() => handlechange("pending")} type="checkbox" value={filter} />
            <label>Pending</label>
            <input onChange={() => handlechange("in-progress")} type="checkbox" value={filter} />
            {/* <input onClick={checks} type="checkbox" value="in-Progress" id="in-Progress" /> */}
            <label>In-Progress</label>
            <input onChange={() => handlechange("completed")} type="checkbox" value={filter} />
            {/* <input onClick={checks} type="checkbox" value="completed" id="completed" /> */}
            <label>Completed</label>
          </div>

        </div>
        <div>
          <h2>All Tasks</h2>
          <br />
          <ol>
            {Store ? Store.map((i) => {
              return <li key={i}>{i.value}  {i.filter}</li>
            }) : ""}
          </ol>

        </div>
        <div>
          <h2>All Tasks using checkboxes</h2>
          <br />
          <ol>
            {Check ? Check.map((i) => {
              return <li key={i}>{i.value}  {i.filter}</li>
            }) : ""}
          </ol>

        </div>
      </form>
    </div>
  )
}
export default Input