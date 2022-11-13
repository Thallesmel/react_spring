import { React, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './FormularioLogin.css';

const FormularioLogin = () => {
  const [email, setEmail] = useState ("");
  const [senha, setSenha] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', { email, senha });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 id='txt1'>Informacoes pessoais</h1>
      <input
        type='email'
        name='email'
        placeholder='email'
        className='form-control'
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='password'
        name='senha'
        placeholder='senha'
        className='form-control'
        onChange={(e) => setSenha(e.target.value)}
        defaultValue={senha}
        required
      />
        <input
          type='submit'
          value='logar'
          className='btn'
        />
      <div className='details'>
        <h5>Nao possui uma conta? </h5>
        <Link to='../Cadastro'className='link'> Cadastre-se</Link>
      </div>
    </form>
  );
};
export default FormularioLogin;


  /* <CadastrarForm
              botao={btnCadastrar}
              cadastrar={Cadastrar}
              indice={indiceUser}
              obj={objUsuario}
              cancelar={limparFormulario}
              remover={Remover}
              alterar={alterar}
              handleLog={handleLog} */

