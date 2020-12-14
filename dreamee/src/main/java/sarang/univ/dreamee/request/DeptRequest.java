package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DeptRequest {
    private String deptName;
    private String pastorName;
    private String deptLocation;
}
