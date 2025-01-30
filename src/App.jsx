import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const headers = {
  "ngrok-skip-browser-warning": "123"
}

// https://ecb7-45-236-9-52.ngrok-free.app/times
function TimesFutebol() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetchTimes();
  },[]);

  const fetchTimes = async () => {
    const response = await axios.get(
      'https://ecb7-45-236-9-52.ngrok-free.app/times',
      {headers: headers}
    )
    console.log(response.data);
    setTimes(response.data);
    console.log(times);
  }

  return <>
    <h1>Times de Futebol</h1>
    <ul>
    {
      times.map((t) => (
                <li key={t.id}> {t.nome}</li>
            )
        )
      }
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
