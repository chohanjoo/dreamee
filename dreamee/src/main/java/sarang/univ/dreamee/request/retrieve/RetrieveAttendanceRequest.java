package sarang.univ.dreamee.request.retrieve;

import lombok.*;

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
}
