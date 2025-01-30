import { useState } from "react";

export default function AddTime() {
    const [nome,setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);
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