import React, { useEffect, useState } from 'react';
import data from "./data"
const Counter = () => {
  const [count, setCount] = useState(0);
const increment = ()=>{
  setCount(count+1)
}
const decrement=()=>{
  setCount(count - 1)
}
useEffect(()=>{
  console.log(count+"count")
},[])
  return (

  
    <div>
    {
      data.map((item)=>{
        <div key={item.id}>
        <h3>{item.title}</h3>
        <a href="">{item.url}</a>
        <p>{item.description}</p>
        </div>
      })
    }
      <h1>Count: {count}</h1>
      <button onClick={ increment}>Increment</button>
      <button onClick={ decrement}>Decrement</button>
    </div>
  )
}

export default Counter;
