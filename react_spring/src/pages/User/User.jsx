import { React, useState, useEffect, useContext } from 'react';
import './User.css';
import Navbar from '../../components/Navbar/Navbar';
import FormularioLogin from '../../components/FormularioUsuario/FormularioLogin';
import Perfil from '../../components/Perfil/Perfil';
import { themeContext } from '../../context';

const User = () => {
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

  const buscar = (codigo) => {
    fetch('http://localhost:8080/UsuarioSelecionar/' + codigo)
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido ===! null) {
          return retorno_convertido;
        }
        return null;
      });
  };

  // Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/UsuarioAlterar', {
      method: 'put',
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
          // Mensagem
          alert('Usuario alterado com sucesso!');

          // Cópia do vetor de pacotes
          let vetorTemp = [...usuarios];

          // Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objUsuario.codigo;
          });

          // Alterar  produto do vetorTemp
          vetorTemp[indice] = objUsuario;

          // Atualizar o vetor de produtos
          setUsuarios(vetorTemp);

          // Limpar o formulário
          limparFormulario();
        }
      });
  };

  // Remover produto
  const Remover = () => {
    fetch('http://localhost:8080/UsuarioRemover/' + objUsuario.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // Mensagem
        alert(retorno_convertido.mensagem);

        // Cópia do vetor de produtos
        let vetorTemp = [...usuarios];

        // Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objUsuario.codigo;
        });

        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar o vetor de produtos
        setUsuarios(vetorTemp);

        // Limpar formulário
        limparFormulario();
      });
  };

  // Limpar formulário
  const limparFormulario = () => {
    setObjUsuario(usuario);
    setBtnCadastrar(true);
  };

  // Selecionar produto
  const selecionarUsuario = (indice) => {
    setObjUsuario(usuarios[indice]);
    setBtnCadastrar(false);
  };

  // Retorno
  return (
    <div className='User'>
      <Navbar />
      <div className='intro'>{logado ? <h1>Usuario</h1> : <h1>Logar</h1>}</div>
      {logado ? (
        <Perfil vetor={usuarios} selecionar={selecionarUsuario} />
      ) : (
        <FormularioLogin/>
      )}
    </div>
  );
};

export default User;
