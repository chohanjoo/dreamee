package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Village {
    private Integer villageId;
    private Integer saintId;
    private String villageName;
    private Integer dateCreated;
    private Integer dateUpdated;
}
