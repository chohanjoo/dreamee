package sarang.univ.dreamee.request.retrieve;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class RetrieveSaintRequest {
    private Integer saintId;
    private String saintName;
}
