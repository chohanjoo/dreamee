package sarang.univ.dreamee.param;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SaintParam {
    private Integer saintId;
    private String saintName;
    private String villageName;
}
