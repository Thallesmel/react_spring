package modules.user.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import modules.user.dto.CreateUserRoleDTO;
import modules.user.model.Role;
import modules.user.model.UsuarioModelo;
import modules.user.repository.UsuarioRepositorio;

@Service
public class CreateRolesService {

  @Autowired
  UsuarioRepositorio ur;
  CreateUserRoleDTO cr;

  public UsuarioModelo execute(CreateUserRoleDTO cr) {

    Optional<UsuarioModelo> userExists = ur.findById(cr.getCodigo());
    List<Role> roles = new ArrayList<>();

    if (userExists.isEmpty()) {
      throw new Error("User does not exists!");
    }

    roles = cr.getCodigosRoles().stream().map(role -> {
      return new Role(role);
    }).collect(Collectors.toList());

    UsuarioModelo usuario = userExists.get();

    usuario.setRoles(roles);

    ur.save(usuario);

    return usuario;

  }
}