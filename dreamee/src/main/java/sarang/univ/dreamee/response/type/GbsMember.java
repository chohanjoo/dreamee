package sarang.univ.dreamee.response.type;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.dto.Village;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class GbsMember {
    // GBS Info
    private Gbs gbs;

    // Saint Info
    private Saint saint;

    // Village Info
    private Village village;

    private String activeTerm;
}
