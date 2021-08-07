package sarang.univ.dreamee.exception.error;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import sarang.univ.dreamee.exception.ErrorInfo;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum DreameeError implements ErrorInfo {
    DREAMEE_SAINT_NOT_FOUND(HttpStatus.NOT_FOUND, "DREAMEE-0001", "성도 정보를 찾지 못했습니다.")
    ;

    private final HttpStatus statusCode;
    private final String errorCode;
    private final String message;
}
