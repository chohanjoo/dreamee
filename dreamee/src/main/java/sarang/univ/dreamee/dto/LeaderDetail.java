package sarang.univ.dreamee.dto;

import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class LeaderDetail {
    // leader
    private Integer leaderId;
    private Integer saintId;
    //TODO YN ENUM으로 정리
    private String active;
    private String role;
    private String dateCreated;
    private String dateUpdated;

    // saint
    private Integer deptId;
    private Integer villageId;
    private Integer age;
    private String name;
    private String preChurch;
    private String gender;
    private String major;
    private String address;
    private String birthday;
    private String baptism;
    private String discipleTraining;

    // village
    private String villageName;

    // dept
    private String deptName;
}
