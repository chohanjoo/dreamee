package sarang.univ.dreamee.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class VillageRequest {
    private String villageName;
    private String saintName;
}
