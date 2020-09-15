import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPoup();
        if(result){
            onReceive(result.user);
        }else{
            alert('Erro!');
        }
    }

    return (
        <div className="login">
            <h1>Seja bem vindo(a)</h1>
            <h4>Clique no botão abaixo para comecar a usar</h4>
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}