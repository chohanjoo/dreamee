package sarang.univ.dreamee.dto;

import lombok.*;

import java.util.Date;

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
    private Date dateCreated;
    private Date dateUpdated;
}
