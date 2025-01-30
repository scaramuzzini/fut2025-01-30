import { useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
  }

export default function AddTime() {
    const [nome,setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);

        const novoTime = {
            nome: nome
        };

        const response = await axios.post('https://ecb7-45-236-9-52.ngrok-free.app/times',
            novoTime,
            {
                headers: headers,
            }
        );
        console.log(response);
        setNome('');
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
                    <input type="submit" value="Salvar" />
                </label>
            </form>
        </>
    )
}