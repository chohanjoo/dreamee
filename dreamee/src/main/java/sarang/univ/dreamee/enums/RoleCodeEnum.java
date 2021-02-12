package sarang.univ.dreamee.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RoleCodeEnum {
    LEADER("LEDER"),
    VILLAGER("VIGER"),
    ASSISTANT("ASTER")
    ;

    private final String code;
}
