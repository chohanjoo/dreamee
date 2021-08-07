package sarang.univ.dreamee.param;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AttParam {
    private Integer saintId;
    private String saintName;
    private String villageName;

    private boolean isThisYear;
    private String searchDate;
}
