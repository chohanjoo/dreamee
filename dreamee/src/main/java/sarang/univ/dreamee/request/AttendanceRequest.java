package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AttendanceRequest {
//    private String leaderName;
//    private String saintName;
    private Integer gbsId;
    private String worshipState;
    private String attState;
    private Integer qtNumber;
//    private Boolean isAbsence;

//    private String activeTerm;
}
