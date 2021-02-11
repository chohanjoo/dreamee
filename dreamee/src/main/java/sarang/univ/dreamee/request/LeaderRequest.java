package sarang.univ.dreamee.request;

import lombok.*;

@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LeaderRequest {
    private Integer leaderId;
    private String saintName;
    private String password;
    private String active;
    private String role;
}
