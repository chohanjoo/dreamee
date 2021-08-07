package sarang.univ.dreamee.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
    private String apiVersion;
    private String id;
    private String method;
    private String params;
    private Long size;
    private T data;
    private ErrorResponse error;
}
