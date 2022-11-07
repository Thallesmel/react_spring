function Formulario({
  botao,
  eventoTeclado,
  cadastrar,
  obj,
  cancelar,
  remover,
  alterar,
}) {
  return (
    <form>
      <input
        type='text'
        value={obj.partida}
        onChange={eventoTeclado}
        name='partida'
        placeholder='partida'
        className='form-control'
        required
      />
      <input
        type='text'
        value={obj.destino}
        onChange={eventoTeclado}
        name='destino'
        placeholder='destino'
        className='form-control'
        required
      />
      <input
        type='number'
        value={obj.preco}
        onChange={eventoTeclado}
        name='preco'
        placeholder='preco'
        className='form-control'
        required
      />
      <input
        type='number'
        value={obj.data}
        onChange={eventoTeclado}
        name='data'
        placeholder='data'
        className='form-control'
        maxLength={8}
        required
      />
            <input
        type='text'
        value={obj.sigla}
        onChange={eventoTeclado}
        name='sigla'
        placeholder='abreviacao de destino'
        className='form-control'
        maxLength={2}
        required
      />

      {botao ? (
        <input
          type='button'
          value='Cadastrar'
          onClick={cadastrar}
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
  );
}

export default Formulario;
