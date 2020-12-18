package sarang.univ.dreamee.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum DeptEnum {
    UNIV_1("대학1부","S203"),
    UNIV_2("대학2부","B402"),
    UNIV_3("대학3부","S402"),
    UNIV_4("대학4부","B501"),
    UNIV_5("대학5부","S702"),
    UNIV_6("대학6부","S502"),
    UNIV_7("대학7부","S301"),
    UNIV_8("대학8부","S801")
    ;

    private final String name;
    private final String location;
}
