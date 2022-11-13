package modules.user.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import modules.user.model.UsuarioModelo;

@Repository
public interface UsuarioRepositorio extends JpaRepository<UsuarioModelo, UUID> {
    UsuarioModelo findByUsername(String nome);
}
