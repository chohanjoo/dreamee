package sarang.univ.dreamee.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ExceptionBuilder {
    private ErrorInfo errorInfo;
    private List<String> params;
    private String notificationMessage;
    private Throwable cause;

    public ExceptionBuilder(final ErrorInfo errorInfo) {
        this.errorInfo = errorInfo;
        this.params = new ArrayList<>();
    }

    public static ExceptionBuilder of(final ErrorInfo errorInfo) {
        return new ExceptionBuilder(errorInfo);
    }

    public ExceptionBuilder params(final String... params) {
        this.params = Arrays.asList(params);
        return this;
    }

    public ExceptionBuilder params(final String params) {
        this.params = Collections.singletonList(params);
        return this;
    }

    public ExceptionBuilder notificationMessage(final String notificationMessage) {
        this.notificationMessage = notificationMessage;
        return this;
    }

    public ExceptionBuilder cause(final Throwable cause) {
        this.cause = cause;
        return this;
    }

    public DreameeException build() {
        return new DreameeException(errorInfo, params, notificationMessage, cause);
    }
}
