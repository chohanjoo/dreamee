package sarang.univ.dreamee.response.type;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import sarang.univ.dreamee.dto.LeaderDetail;

import java.util.List;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TodayGbsAtt {
    private LeaderDetail leaderDetail;
    private List<SaintAtt> saintAttList;
}
