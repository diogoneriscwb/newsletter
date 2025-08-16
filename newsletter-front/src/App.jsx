import React, { useState } from 'react';
import FormularioCadastro from './components/FormularioCadastro'; // ajuste o caminho se necessário
import imagem from './assets/images/Imagem.png';
import Agradecimento from './components/Agradecimento';
import './components/Agradecimento.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/api/inscricao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            setMensagem(data.mensagem);
            setEmail(''); // linha adicionada para limpar o campo depois..
        } catch (err) {
            setMensagem('Erro ao enviar. Tente novamente.');
            console.error(err);
        }
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black flex items-center justify-center p-4">
                            <div className="bg-gradient-to-br from-black to-blue-900 rounded-xl shadow-lg w-full max-w-5xl p-8">
                                <div className="flex flex-col md:flex-row gap-10 items-center">
                                    {/* Coluna da esquerda - texto e formulário */}
                                    <div className="flex-1 text-white space-y-6">
                                        <h1 className="text-3xl text-center font-bold">Inscreva-se agora!</h1>
                                        <p className="text-justify leading-relaxed">
                                            Preencha o formulário abaixo para se inscrever e comece a receber nossas atualizações diretamente em sua caixa de entrada.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400">✔</span> Guias e Tutoriais: Aprenda como implementar e otimizar soluções de IoT para sua empresa.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400">✔</span> Notícias e Tendências: Fique por dentro das últimas novidades e avanços do mundo IoT.
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400">✔</span> Ofertas e Promoções: Receba ofertas especiais e ofertas exclusivas para assinantes da nossa newsletter.
                                            </li>
                                        </ul>
                                        {/* Componente do formulário */}
                                        <FormularioCadastro />
                                    </div>

                                    {/* Coluna da direita - imagem */}
                                    <div className="flex-1 flex justify-center items-center">
                                        <img
                                            src={imagem}
                                            alt="Newsletter visual"
                                            className="max-w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
                <Route path="/obrigado" element={<Agradecimento />} />
            </Routes>
        </Router>
    );
}

export default App;