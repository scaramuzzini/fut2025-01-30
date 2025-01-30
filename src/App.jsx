import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const headers = {
  "ngrok-skip-browser-warning": "123"
}

// https://ecb7-45-236-9-52.ngrok-free.app/times
function TimesFutebol() {

  useEffect(() => {
    fetchTimes();
  },[]);

  const fetchTimes = async () => {
    const response = await axios.get(
      'https://ecb7-45-236-9-52.ngrok-free.app/times',
      {headers: headers}
    )
    console.log(response);
  }

  return <>
    <h1>Times de Futebol</h1>
    <ul>
      <li>time1</li>
      <li>time2</li>
      <li>time3</li>
    </ul>
  </>
}

function App() {

  return (
    <>
      <TimesFutebol />
    </>
  )
}

export default App
