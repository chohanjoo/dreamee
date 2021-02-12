package sarang.univ.dreamee.request.retrieve;

import lombok.*;

@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RetrieveLeaderRequest {
    private Integer leaderId;
    private Integer saintId;

    private String saintName;
}
