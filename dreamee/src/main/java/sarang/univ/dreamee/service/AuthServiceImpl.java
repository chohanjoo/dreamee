package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.AuthorityDao;
import sarang.univ.dreamee.dao.LeaderDao;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.AuthenticationRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.response.type.SignInResult;

import java.util.Collection;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService{

    private final AuthorityDao authorityDao;

    private final LeaderService leaderService;
    private final SaintService saintService;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public SignInResult signIn(AuthenticationRequest request) throws Exception {
        log.debug("[signIn] params >> {}", request);

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(request.getUsername())
                        .build()
        );

        log.debug("[signIn] saint info >> {}", saint);

        Leader leader = leaderService.retrieveLeader(
                RetrieveLeaderRequest.builder()
                        .saintId(saint.getSaintId())
                        .build()
        );

        log.debug("[signIn] leader info >> {}", leader);

        if (!passwordEncoder.matches(request.getPassword(), leader.getPassword()))
            throw new Exception();


        Collection<? extends GrantedAuthority> authorities = this.getAuthorities(leader.getLeaderId());

        log.debug("[signIn] authorities >> {}", authorities);

        return SignInResult.builder()
                .name(saint.getName())
                .authorities(authorities)
                .build();
    }

    @Override
    public Collection<GrantedAuthority> getAuthorities(Integer userId) {
        List<GrantedAuthority> authorities = authorityDao.retrieveAuthority(userId);

        return authorities;
    }

    @Override
    public UserDetails loadUserByUsername(String leaderName) throws UsernameNotFoundException {

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(leaderName)
                        .build()
        );

        Leader leader = leaderService.retrieveLeader(
                RetrieveLeaderRequest.builder()
                        .saintId(saint.getSaintId())
                        .build()
        );

        leader.setAuthorities(getAuthorities(leader.getLeaderId()));

        return leader;
    }


    @Override
    public PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }
}
