package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dao.AuthorityDao;
import sarang.univ.dreamee.dao.LeaderDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.enums.YnEnum;
import sarang.univ.dreamee.param.LeaderParam;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class LeaderServiceImpl implements LeaderService{

    private final LeaderDao leaderDao;
    private final SaintDao saintDao;
    private final AuthorityDao authorityDao;

    private final SaintService saintService;

    @Override
    public List<Leader> retrieveAllLeader() {
        return leaderDao.retrieveAllLeader();
    }

    @Override
    public Leader retrieveLeader(RetrieveLeaderRequest request) {
        log.debug("[retrieveLeader] params >> {}", request);

        Integer saintId = request.getSaintId();

        if(
                saintId == null
                && request.getSaintName() != null
        ) {

            Saint saint = saintService.retrieveSaintByName(request.getSaintName());
            saintId = saint.getSaintId();
        }

        if(
                saintId == null
                && request.getLeaderId() == null
        ) {
            //TODO throw Exception
        }

        return leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .leaderId(request.getLeaderId())
                        .saintId(saintId)
                        .build()
        );
    }

    //TODO naming 변경 필요
    @Override
    public LeaderInfo retrieveLeaderInfo(LeaderRequest request) {
        Leader leader =  leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .leaderId(request.getLeaderId())
                        .build()
        );
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
                .active(Optional.ofNullable(request.getActive()).orElse(YnEnum.Y.name()))
                .password(encodedPassword)
                .authorities(AuthorityUtils.createAuthorityList("LEADER"))
                .role(request.getRole()).build();

        int result = leaderDao.registerLeader(leader);

        Leader newLeader = leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .saintId(saint.getSaintId())
                        .build()
        );

        leader.setLeaderId(newLeader.getLeaderId());

        authorityDao.createAuthority(leader);

        return result;
    }
}
