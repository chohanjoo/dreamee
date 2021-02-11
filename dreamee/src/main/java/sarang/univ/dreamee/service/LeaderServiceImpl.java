package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dao.AuthorityDao;
import sarang.univ.dreamee.dao.LeaderDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Authority;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class LeaderServiceImpl implements LeaderService{

    private final LeaderDao leaderDao;
    private final SaintDao saintDao;
    private final AuthorityDao authorityDao;

    @Override
    public List<Leader> retrieveAllLeader() {
        return leaderDao.retrieveAllLeader();
    }

    @Override
    public Leader retrieveLeaderBySaintId(Integer saintId) {
        return leaderDao.retrieveLeaderBySaintId(saintId);
    }

    @Override
    public LeaderInfo retrieveLeader(LeaderRequest request) {
        Leader leader =  leaderDao.retrieveLeader(request);
        Saint saint = saintDao.retrieveSaintById(leader.getSaintId());

        return LeaderInfo.builder()
                .leader(leader)
                .saint(saint)
                .build();
    }

    @Override
    @Transactional
    public Integer registerLeader(LeaderRequest request) {
        log.debug("[registerLeader] params >> {}", request);

        Saint saint = saintDao.retrieveSaintByName(request.getSaintName());

        String encodedPassword = new BCryptPasswordEncoder().encode(request.getPassword());

        // TODO Sequence 로 채번하기

        Leader leader = Leader.builder()
                .saintId(saint.getSaintId())
                .active(Optional.ofNullable(request.getActive()).orElse("Y"))
                .password(encodedPassword)
                .authorities(AuthorityUtils.createAuthorityList("LEADER"))
                .role(request.getRole()).build();

        int result = leaderDao.registerLeader(leader);

        Leader newLeader = leaderDao.retrieveLeaderBySaintId(saint.getSaintId());

        leader.setLeaderId(newLeader.getLeaderId());

        authorityDao.createAuthority(leader);

        return result;
    }
}
