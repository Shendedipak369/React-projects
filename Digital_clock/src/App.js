import React, { useState } from 'react'
import "./App.css";

const App = () => {

  let time = new Date().toLocaleDateString();

  const [data, setData] = useState(time);

  setTimeout(() => {
    setData(new Date().toLocaleTimeString());
  }, 1000);



  return (
    <h1 className='App'>{data}</h1>
  )
}

export default App


