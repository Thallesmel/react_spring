package modules.user.dto;

import java.util.List;
import java.util.UUID;
import lombok.Data;

@Data
public class CreateUserRoleDTO {

  private UUID codigo;

  private List<UUID> codigosRoles;

}