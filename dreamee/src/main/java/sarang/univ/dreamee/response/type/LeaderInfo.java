package sarang.univ.dreamee.response.type;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Saint;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class LeaderInfo {
    private Leader leader;
    private Saint saint;
}
