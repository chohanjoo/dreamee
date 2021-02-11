package sarang.univ.dreamee.dto;

import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Leader extends Authority{
    private Integer leaderId;
    private Integer saintId;
    private String password;
    //TODO YN ENUM으로 정리
    private Boolean active;
    private String role;
    private String dateCreated;
    private String dateUpdated;
    private String endDate;

    @Override
    public String getUsername() {
        return saintId.toString();
    }
}
