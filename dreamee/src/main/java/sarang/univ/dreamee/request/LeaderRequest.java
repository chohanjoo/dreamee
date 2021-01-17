package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LeaderRequest {
    private Integer leaderId;
    private String saintName;
    private String password;
    private Boolean active;
    private String role;
}
