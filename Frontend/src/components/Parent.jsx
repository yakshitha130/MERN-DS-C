import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Alice" age={24} isActive={true} food ={["Briyani","curd","Lemon"]}/>
    </div>
  )
}

export default Parent