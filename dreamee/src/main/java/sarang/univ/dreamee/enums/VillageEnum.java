package sarang.univ.dreamee.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@AllArgsConstructor
public enum VillageEnum {
    VILLAGE_S("S마을"),
    VILLAGE_H("H마을"),
    VILLAGE_A("A마을"),
    VILLAGE_L("L마을"),
    VILLAGE_O("O마을"),
    VILLAGE_M("M마을"),
    VILLAGE_EXCLA("!마을")
    ;

    private final String name;

    public static Map<String, String> VillageTypeList = Stream.of( values() ).collect( Collectors.toMap(VillageEnum::getName, VillageEnum::name ) );
}
