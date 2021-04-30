package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;
import sarang.univ.dreamee.enums.DeptEnum;
import sarang.univ.dreamee.enums.VillageEnum;

@Getter
@Builder
public class SaintRequest {
    private DeptEnum dept;
    private VillageEnum village;
    private Integer age;
    private String name;
    private String preChurch;
    private String gender;
    private String major;
    private String address;
    private String birthday;
    private String baptism;
    private String discipleTraining;
}
