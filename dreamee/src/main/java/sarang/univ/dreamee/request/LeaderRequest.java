package sarang.univ.dreamee.request;

import lombok.*;
import sarang.univ.dreamee.enums.RoleCodeEnum;

@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LeaderRequest {
    private Integer leaderId;
    private String saintName;
    private String password;
    private String active;
    private RoleCodeEnum role;
}
