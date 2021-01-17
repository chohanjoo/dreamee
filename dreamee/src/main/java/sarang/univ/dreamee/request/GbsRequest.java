package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GbsRequest {
    private String leaderName;
    private String saintName;
    private Integer saintId;
    private String villageName;
    private String activeTerm;
}
