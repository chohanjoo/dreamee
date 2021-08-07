package sarang.univ.dreamee.request.retrieve;

import lombok.*;
import sarang.univ.dreamee.enums.VillageEnum;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RetrieveAttendanceRequest {

    @Builder.Default
    private boolean isThisYear = false;

    private Integer saintId;
    private String saintName;
    private VillageEnum villageCode;
    private String searchDate;
}
