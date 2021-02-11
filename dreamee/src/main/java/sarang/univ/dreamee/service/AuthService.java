package sarang.univ.dreamee.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import sarang.univ.dreamee.request.AuthenticationRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;
import sarang.univ.dreamee.response.type.SignInResult;

import java.util.Collection;

public interface AuthService extends UserDetailsService {
    SignInResult signIn(AuthenticationRequest request) throws Exception;

    Collection<GrantedAuthority> getAuthorities(Integer leaderId);
    PasswordEncoder passwordEncoder();
}
