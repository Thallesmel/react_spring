import {React, useState, useContext, useEffect} from "react";
import { themeContext } from "../../context";
import './CadastrarForm.css';
import Navbar from "../../components/Navbar/Navbar";

function CadastrarForm({
    botao,
    cadastrar,
    indice,
    obj,
    cancelar,
    remover,
    alterar,
    handleLog,
  }) {
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
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [objUsuario, setObjUsuario] = useState(usuario);
    const [indiceUser, setIndiceUser] = useState(usuario.codigo);
  
    // UseEffect
    useEffect(() => {
      fetch('http://localhost:8080/UsuarioListar')
        .then((retorno) => retorno.json())
        .then((retorno_convertido) => setUsuarios(retorno_convertido));
    }, []);
    
    // Limpar formulário
    const limparFormulario = () => {
      setObjUsuario(usuario);
      setBtnCadastrar(true);
    };
  
    const Cadastrar = () => {
      fetch('http://localhost:8080/UsuarioCadastrar', {
        method: 'post',
        body: JSON.stringify(objUsuario),
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((retorno) => retorno.json())
        .then((retorno_convertido) => {
          if (retorno_convertido.mensagem !== undefined) {
            alert(retorno_convertido.mensagem);
          } else {
            setUsuarios([...usuarios, retorno_convertido]);
            alert('Usuario cadastrado com sucesso!');
            limparFormulario();
          }
        });
    };
  
    return (
      <div className="Cadastro">
              <Navbar />
              <form>
        <h1 id="txt1">Informacoes pessoais</h1>
        <input
          type='text'
          value={obj.nome}
          name='nome'
          placeholder='nome'
          className='form-control'
          required
        />
        <input
          type='email'
          value={obj.email}
          name='email'
          placeholder='email'
          className='form-control'
          required
        />
        <input
          type='password'
          value={obj.senha}
          name='senha'
          placeholder='senha'
          className='form-control'
          required
        />
              <input
          type='text'
          value={obj.tipo}
          name='tipo'
          placeholder='cliente ou agencia'
          className='form-control'
          required
        />
  
        {botao ? (
          <input
            type='button'
            value='Cadastrar'
            onClick={cadastrar && handleLog(indice)}
            className='btn btn-primary'
          />
        ) : (
          <div>
            <input
              type='button'
              value='Alterar'
              onClick={alterar}
              className='btn btn-warning'
            />
            <input
              type='button'
              value='Remover'
              onClick={remover}
              className='btn btn-danger'
            />
            <input
              type='button'
              value='Cancelar'
              onClick={cancelar}
              className='btn btn-secondary'
            />
          </div>
        )}
      </form>
      </div>

    );
  }
  
  export default CadastrarForm;
  