package sarang.univ.dreamee.exception;

import org.springframework.http.HttpStatus;

public interface ErrorInfo {
    HttpStatus getStatusCode();

    String getErrorCode();

    String getMessage();
}
