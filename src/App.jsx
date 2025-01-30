import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import AddTime from './AddTime'

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

  const refreshTimes = (novoTime) => {
    setTimes([...times, novoTime]);
  }

  return <>
    <h3>Times de Futebol</h3>
    <AddTime onTimeAdicionado={refreshTimes} />
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Títulos</th>
          <th>Estádio</th>
          <th>Ano de Fundação</th>
        </tr>
        </thead>
        <tbody>
          {times.map((t) => (
            <tr key={t.id}>
              <td>{t.nome}</td>
              <td>{t.titulos}</td>
              <td>{t.estadio}</td>
              <td>{t.ano_fundacao}</td>
            </tr>
          ))}
        </tbody>
    </table>
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
