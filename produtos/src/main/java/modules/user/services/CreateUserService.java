package modules.user.services;

import org.springframework.beans.factory.annotation.Autowired;
import modules.user.model.UsuarioModelo;
import modules.user.repository.UsuarioRepositorio;

public class CreateUserService {

    @Autowired
    private UsuarioRepositorio ur;

    public UsuarioModelo execute(UsuarioModelo user) {
        
        UsuarioModelo existsUser = ur.findByUsername(user.getNome());
    

    if (existsUser != null) {
        throw new Error("Usuario ja existe!");
      }
  
      UsuarioModelo usuarioCriado = ur.save(user);
  
      return usuarioCriado;
    }
  
}
