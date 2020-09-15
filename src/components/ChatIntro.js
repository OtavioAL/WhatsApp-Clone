import React from 'react';
import './ChatIntro.css';
import iniciowpp from '../Img/iniciowpp2.png'


export default () => {
    return (
        <div className="chatIntro">
            <img src={iniciowpp} alt=""></img>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br></br>
                Para reduzir o uso de dados, conecte seu telefone a uma rede WI-FI.
            </h2>
        </div>
    );
}