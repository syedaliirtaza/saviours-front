import React,{useState} from 'react'
import "./Key.css";

function Keysecret({setConfirm}) {
  const key = "lal rumal";
  const [ myKey, setMyKey] = useState("");
  const check = () => {
    if(myKey === key){
      setConfirm(prev => !prev);
    } else {
      alert("wrong key")
    }
  }
  return (
    <div className='secret'>
        <h1>ENTER THE SECRET KEY EHEHEHE</h1>
        <input onChange={(e)=>{setMyKey(e.target.value)}} type="text" placeholder="ENTER THE SECRET KEY" />
        <button onClick={check}>ENTER</button>
      </div>
  )
}

export default Keysecret