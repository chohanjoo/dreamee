package sarang.univ.dreamee.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import sarang.univ.dreamee.response.ApiResponse;
import sarang.univ.dreamee.response.ErrorResponse;

@Slf4j
@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = DreameeException.class)
    protected ResponseEntity<ApiResponse<Void>> handleDreameeException(DreameeException ex) {

        ErrorResponse errorResponse = ErrorResponse.builder()
                .status(ex.getErrorInfo().getStatusCode().value())
                .errorCode(ex.getErrorInfo().getErrorCode())
                .message(ex.getErrorInfo().getMessage())
                .details(ex.getNotificationMessage())
                .build();

        return new ResponseEntity<>(ApiResponse.<Void>builder().error(errorResponse).build(), ex.getErrorInfo().getStatusCode());
    }
}
