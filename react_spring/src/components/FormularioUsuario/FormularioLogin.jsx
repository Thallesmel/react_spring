import { React, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './FormularioLogin.css';
import { themeContext } from '../../context';

const FormularioLogin = () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const theme = useContext(themeContext);
  const logado = theme.state.logado;

  // Objeto pacote
  const usuario = {
    codigo: 0,
    nome: '',
    email: '',
    senha: '',
    tipo: '',
    pacotesVendidos: '',
    pacotesComprados: '',
  };

  //useState
  const [usuarios, setUsuarios] = useState([]);
  const [objUsuario, setObjUsuario] = useState(usuario);
  const [indiceUser, setIndiceUser] = useState(usuario.codigo);

  // UseEffect
  useEffect(() => {
    fetch('http://localhost:8080/UsuarioListar')
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setUsuarios(retorno_convertido));
  }, []);

  const validar = () => {
    const valid = buscarEmailSenha(email, senha);
    if (valid === !null) {
      handleLog(valid.codigo);
    }
  };

  const handleLog = (indiceUser) => {
    const validar = buscar(indiceUser);
    if (validar === !null) {
      setObjUsuario(validar);
      setIndiceUser(validar.codigo);
      theme.dispatch({ type: 'toggle' });
    }
  };
  const buscar = (codigo) => {
    let result = '';
    fetch('http://localhost:8080/UsuarioSelecionar/' + codigo)
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido === !null) {
          result = retorno_convertido;
        }
        result = null;
      });
      return result;
  };
  const buscarEmailSenha = (email, senha) => {
    usuarios.forEach(element => {
      if (element.email === email) {
      }
    }
      );
  };
  return (
    <form>
      <h1 id='txt1'>Informacoes pessoais</h1>
      <input
        type='email'
        name='email'
        placeholder='email'
        className='form-control'
        required
      />
      <input
        type='password'
        name='senha'
        placeholder='senha'
        className='form-control'
        required
      />
        <input
          type='button'
          value='logar'
          onClick={buscarEmailSenha(email, senha)}
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

