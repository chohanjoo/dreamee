package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Gbs {
    private Integer gbsId;
    private Integer leaderId;
    private Integer saintId;
    private Integer villageId;
    private String dateCreated;
    private String dateUpdated;
    private String activeTerm;
}
