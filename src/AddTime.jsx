import { useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
  }

export default function AddTime({onTimeAdicionado}) {
    const [nome,setNome] = useState('');
    const [estadio,setEstadio] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);

        const novoTime = {
            nome: nome,
            estadio: estadio
        };

        const response = await axios.post('https://ecb7-45-236-9-52.ngrok-free.app/times',
            novoTime,
            {
                headers: headers,
            }
        );
        console.log(response);
        setNome('');
        setEstadio('');
        onTimeAdicionado(response.data);
    };
    return (
        <>
            <h3>Novo Time</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                </label>
                <br/>
                <label>
                    Estádio:
                    <input type="text" name="estadio" 
                        value={estadio}
                        onChange={(e) => setEstadio(e.target.value)}
                        />
                </label>
                <input type="submit" value="Salvar" />
            </form>
        </>
    )
}