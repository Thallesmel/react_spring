package modules.user.controller;

import java.util.Optional;
import java.util.UUID;

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
import modules.user.dto.CreateUserRoleDTO;
import modules.user.model.UsuarioModelo;
import modules.user.services.CreateRolesService;
import modules.user.services.CreateUserService;
import modules.user.services.UsuarioServico;


@RestController
@CrossOrigin(origins = "*")
public class UsuarioControle {

    @Autowired
    private UsuarioServico ps;
    private CreateUserService cus;
    private CreateRolesService crs;


    @DeleteMapping("/UsuarioRemover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable UUID codigo) {
        return ps.remover(codigo);
    }

    @PutMapping("/UsuarioAlterar")
    public ResponseEntity<?> alterar(@RequestBody UsuarioModelo pm) {
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @GetMapping("/UsuarioSelecionar/{codigo}")
    public Optional<UsuarioModelo> selecionar(@PathVariable UUID codigo) {
        return ps.selecionar(codigo);
    }

    @PostMapping("/UsuarioCriar")
    public UsuarioModelo create(@RequestBody UsuarioModelo user) {
      return cus.execute(user);
    }

    @GetMapping("/UsuarioListar")
    public Iterable<UsuarioModelo> listar() {
        return ps.listar();

    }

    @GetMapping("/U")
    public String rota() {
        return "API de user funcionando!";
    }

    @PostMapping("/role")
    public UsuarioModelo role(@RequestBody CreateUserRoleDTO cr) {
        return crs.execute(cr);
    }

}