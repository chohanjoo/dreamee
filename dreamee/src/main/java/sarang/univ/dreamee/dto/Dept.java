package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer deptId;
    private Integer pastorId;
    private Integer missionaryId;
    private String deptName;
    private String deptLocation;
}
