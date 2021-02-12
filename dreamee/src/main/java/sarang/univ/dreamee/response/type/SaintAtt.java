package sarang.univ.dreamee.response.type;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SaintAtt {
    private Integer attId;
    private String worshipState;
    private String attState;
    private Integer qtNumber;
    private Date dateCreated;
    private Date dateUpdated;

    private String leaderName;
    private Integer leaderId;

    private String villageName;
}
