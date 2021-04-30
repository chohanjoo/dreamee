package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class RegisterGbsRequest {
    private String leaderName;
    private String saintName;
    private String villageName;
    private String activeTerm;
}
