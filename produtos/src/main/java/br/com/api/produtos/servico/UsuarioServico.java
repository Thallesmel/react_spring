package br.com.api.produtos.servico;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.UsuarioModelo;
import br.com.api.produtos.repositorio.UsuarioRepositorio;

@Service
public class UsuarioServico {

    @Autowired
    private UsuarioRepositorio ur;

    @Autowired
    private RespostaModelo rm;

    // Método para listar todos os produtos
    public Iterable<UsuarioModelo> listar() {
        return ur.findAll();
    }

    // Método para listar um Usuario
    public Optional<UsuarioModelo> selecionar(Long id) {
        return ur.findById(id);
    }

    // Método para cadastrar ou alterar produtos
    public ResponseEntity<?> cadastrarAlterar(UsuarioModelo pm, String acao) {

        if (pm.getNome().equals("")) {
            rm.setMensagem("O Nome e obrigatorio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getEmail().equals("")) {
            rm.setMensagem("O Email e obrigatorio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getSenha().equals("")) {
            rm.setMensagem("a Senha e obrigatoria!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getTipo().equals("")) {
            rm.setMensagem("Este campo e obrigatorio!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<UsuarioModelo>(ur.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<UsuarioModelo>(ur.save(pm), HttpStatus.OK);
            }
        }
    }

    // Método para remover produtos
    public ResponseEntity<RespostaModelo> remover(long codigo) {

        ur.deleteById(codigo);
        rm.setMensagem("O Usuario foi removido com sucesso!");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);

    }
}
