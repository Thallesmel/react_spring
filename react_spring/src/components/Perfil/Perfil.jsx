import React from 'react';
import './Perfil.css';

const Perfil = ({ vetor, selecionar }) => {
  return (
    <div className='Perfil'>
      {vetor.map((obj, indice) => (
        <div className='perfil-card'>
          <div className='titulo'>
            <h1 id='name' key={indice}>{obj.nome}</h1>
            <h2 id='email'>{obj.email}</h2>
          </div>
          <div className='descricao'>
            <h5 id='senha'>Senha: <input type="password" value={obj.senha} /></h5>
            <h2 id='tipo'>- {obj.tipo} -</h2>
          </div>
          <button
            onClick={() => {
              selecionar(indice);
            }}
            className='botao'
          >
            Alterar
          </button>
        </div>
      ))}
    </div>
  );
};
export default Perfil;
