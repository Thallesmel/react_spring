package br.com.api.produtos.controle;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.UsuarioModelo;
import br.com.api.produtos.servico.UsuarioServico;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioControle {

    @Autowired
    private UsuarioServico ps;

    @DeleteMapping("/UsuarioRemover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo) {
        return ps.remover(codigo);
    }

    @PutMapping("/UsuarioAlterar")
    public ResponseEntity<?> alterar(@RequestBody UsuarioModelo pm) {
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @GetMapping("/UsuarioSelecionar/{codigo}")
    public Optional<UsuarioModelo> selecionar(@PathVariable long codigo) {
        return ps.selecionar(codigo);
    }

    @PostMapping("/UsuarioCadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UsuarioModelo pm) {
        return ps.cadastrarAlterar(pm, "cadastrar");
    }

    @GetMapping("/UsuarioListar")
    public Iterable<UsuarioModelo> listar() {
        return ps.listar();

    }

    @GetMapping("/U")
    public String rota() {
        return "API de user funcionando!";
    }
}