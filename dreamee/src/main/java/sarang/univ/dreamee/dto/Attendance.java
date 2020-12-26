package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {
    private Integer attId;
    private Integer saintId;
    private Integer gbsId;
    private String worshipState;
    private String attState;
    private Integer qtNumber;
    private String dateCreated;
    private String dateUpdated;
}
