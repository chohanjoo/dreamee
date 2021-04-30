package sarang.univ.dreamee.param;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class GbsParam {
    private Integer leaderId;

    private Boolean isThisWeek;
    private String activeTerm;
}
