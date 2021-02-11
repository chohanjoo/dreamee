package sarang.univ.dreamee.response.type;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SignInResult {
    private String name;
    private Collection<? extends GrantedAuthority> authorities;
}
