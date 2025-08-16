import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormularioCadastro() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate(); // ⬅️ Aqui você inicializa o hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/api/inscricao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setEmail('');
                navigate('/obrigado'); // ⬅️ Redireciona após sucesso
            } else {
                setMensagem(data.mensagem || 'Erro ao enviar. Tente novamente.');
            }
        } catch (err) {
            setMensagem('Erro ao enviar. Tente novamente.');
            console.error(err);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-sm font-medium text-white">
                E-mail
            </label>
            <input
                id="email"
                type="email"
                placeholder="email@email.com"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button
                type="submit"
                className="w-full p-3 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold"
            >
                Inscrever-se
            </button>
            {mensagem && <p className="text-green-400 font-medium">{mensagem}</p>}
        </form>
    );
}

export default FormularioCadastro;