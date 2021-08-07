package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class AttendanceRequest {
//    private String leaderName;
//    private String saintName;
    private Integer gbsId;
    private String worshipState;
    private String attState;
    private Integer qtNumber;

    @Builder.Default
    private Boolean isAttend = false;

//    private String activeTerm;
}
