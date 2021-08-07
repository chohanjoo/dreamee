package sarang.univ.dreamee.exception;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class DreameeException extends RuntimeException {

    private final ErrorInfo errorInfo;
    private final List<String> params;
    private final String notificationMessage;
    private final Throwable cause;

    public DreameeException(final ErrorInfo errorInfo,
                            final List<String> params,
                            final String notificationMessage,
                            final Throwable cause) {
        super(errorInfo.getMessage());

        this.errorInfo = errorInfo;
        this.params = params;
        this.notificationMessage = notificationMessage;
        this.cause = cause;
    }

}
