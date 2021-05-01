package sarang.univ.dreamee.param;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LeaderParam {
    private Integer leaderId;
    private Integer saintId;
    private Integer villageId;
    private String roleCode;

    private String deptName;
}
