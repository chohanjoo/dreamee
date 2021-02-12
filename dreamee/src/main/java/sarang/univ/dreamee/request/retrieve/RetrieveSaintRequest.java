package sarang.univ.dreamee.request.retrieve;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RetrieveSaintRequest {
    private Integer saintId;
    private String saintName;
}
