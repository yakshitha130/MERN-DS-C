import React, { useEffect,useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
useEffect(()=>{
    console.log("useEffect Mounted")
},[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>Value: {value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>

    </div>
  )
}

export default Effect 
return (
    <div>
        <ul>
    e.preventDefault();
    console.log(user)
      </ul>
    </div>
)
const handleChange =(e)=>{
   
} placeholder ='enter the password'
on change={handlechange}
<br/><br/>