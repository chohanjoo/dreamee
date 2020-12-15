package sarang.univ.dreamee.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum DeptEnum {
    UNIV_1("UNIV.1","SARANG"),
    UNIV_2("UNIV.2","SARANG"),
    UNIV_3("UNIV.3","SARANG"),
    UNIV_4("UNIV.4","은혜 채플"),
    UNIV_5("UNIV.5","SARANG"),
    UNIV_6("UNIV.6","SARANG"),
    UNIV_7("UNIV.7","SARANG"),
    UNIV_8("UNIV.8","SARANG")
    ;

    private final String name;
    private final String location;
}
