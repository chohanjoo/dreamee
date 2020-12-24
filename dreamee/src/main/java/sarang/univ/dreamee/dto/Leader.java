package sarang.univ.dreamee.dto;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Leader {
    private Integer leaderId;
    private Integer saintId;
    private String password;
    private Boolean active;
    private String role;
    private String dateCreated;
    private String dateUpdated;
    private String endDate;
}
