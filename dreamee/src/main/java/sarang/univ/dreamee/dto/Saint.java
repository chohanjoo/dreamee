package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Saint {
    private Integer saintId;
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
    private Integer dateCreated;
    private Integer dateUpdated;

    private String deptName;

    private String villageName;
}
