import React, { useEffect, useState } from 'react';
import './Agradecimento.css';

function Agradecimento() {
    const [mostrarCheck, setMostrarCheck] = useState(false);
    const [mostrarTexto, setMostrarTexto] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setMostrarCheck(true), 100); // leve delay para suavidade
        const timer2 = setTimeout(() => setMostrarTexto(true), 1500); // aparece depois

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="agradecimento-container">
            <div className={`check-mensagem ${mostrarCheck ? 'aparecer' : ''}`}>
                <span className="check-icon">✔</span>
                <h1 className="titulo-obrigado">Obrigado por se inscrever!</h1>
            </div>
            <p className={`texto-obrigado ${mostrarTexto ? 'aparecer' : ''}`}>
                Enquanto isso, siga-nos nas redes.
            </p>
            <div className={`redes-sociais ${mostrarTexto ? 'aparecer' : ''}`}>
                <a href="https://api.whatsapp.com/send/?phone=554135387783&text&type=phone_number&app_absent=0" className="rede">
                    <img src="src/assets/images/whatsapp.svg" alt="WhatsApp" />
                    <span className="nome-rede">WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/company/mindtech-tecnologia/" className="rede linkedin">
                <img src="src/assets/images/linked.svg" alt="LinkedIn" />
                <span className="nome-rede">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/mindtechtecnologia/" className="rede">
                    <img src="src/assets/images/instagram.svg" alt="Instagram" />
                    <span className="nome-rede">Instagram</span>
                </a>
            </div>
        </div>
    );
}

export default Agradecimento;