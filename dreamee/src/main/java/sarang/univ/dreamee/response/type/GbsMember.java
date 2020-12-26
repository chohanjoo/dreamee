package sarang.univ.dreamee.response.type;

import lombok.*;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GbsMember {
    // GBS Info
    private Gbs gbs;
//    private Integer gbsId;
//    private Integer leaderId;
//    private Integer villageId;
//    private String activeTerm;

    // Saint Info
    private Saint saint;
//    private Integer saintId;
//    private Integer deptId;
//    private Integer age;
//    private String name;
//    private String preChurch;
//    private String gender;
//    private String major;
//    private String address;
//    private String birthday;
//    private String baptism;
//    private String discipleTraining;
//    private Integer dateCreated;
//    private Integer dateUpdated;
}
