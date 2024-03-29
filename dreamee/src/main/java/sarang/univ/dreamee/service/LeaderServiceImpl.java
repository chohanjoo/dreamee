package sarang.univ.dreamee.service;

import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dao.AuthorityDao;
import sarang.univ.dreamee.dao.GbsDao;
import sarang.univ.dreamee.dao.LeaderDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.LeaderDetail;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.enums.DeptEnum;
import sarang.univ.dreamee.enums.RoleCodeEnum;
import sarang.univ.dreamee.enums.YnEnum;
import sarang.univ.dreamee.param.GbsParam;
import sarang.univ.dreamee.param.LeaderParam;
import sarang.univ.dreamee.param.SaintParam;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;
import sarang.univ.dreamee.response.type.SaintAtt;
import sarang.univ.dreamee.response.type.TodayGbsAtt;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class LeaderServiceImpl implements LeaderService{

    private final LeaderDao leaderDao;
    private final SaintDao saintDao;
    private final GbsDao gbsDao;
    private final AuthorityDao authorityDao;

    private final SaintService saintService;

    @Override
    public List<Leader> retrieveActiveLeaderList() {
        return leaderDao.retrieveActiveLeaderList(
                LeaderParam.builder()
                        .deptName(DeptEnum.UNIV_4.getName())
                        .roleCode(RoleCodeEnum.LEADER.getCode())
                        .build()
        );
    }

    @Override
    public Leader retrieveLeader(RetrieveLeaderRequest request) {
        log.debug("[retrieveLeader] params >> {}", request);

        Integer saintId = request.getSaintId();

        if(saintId == null
                && request.getSaintName() != null) {

            Saint saint = saintService.retrieveSaint(
                    RetrieveSaintRequest.builder()
                            .saintName(request.getSaintName())
                            .build()
            );

            saintId = saint.getSaintId();
        }

        if(saintId == null
                && request.getLeaderId() == null) {
            //TODO throw Exception
        }

        return leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .leaderId(request.getLeaderId())
                        .saintId(saintId)
                        .build()
        );
    }

    @Override
    public List<TodayGbsAtt> retrieveLeaderGroupOnVillageList(RetrieveLeaderRequest request) {
        log.debug("request >> {}", request);

        Leader leader = leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .leaderId(request.getLeaderId())
                        .build()
        );

        Saint saint = saintDao.retrieveSaint(
                SaintParam.builder()
                        .saintId(leader.getSaintId())
                        .build()
        );

        List<LeaderDetail> leaderDetails = leaderDao.retrieveLeaderList(
                LeaderParam.builder()
                        .villageId(saint.getVillageId())
                        .roleCode(RoleCodeEnum.LEADER.getCode())
                        .build()
        );

        List<TodayGbsAtt> todayGbsAttList = Lists.newArrayList();

        for (LeaderDetail leaderInfo : leaderDetails) {
            List<SaintAtt> saintAttList = gbsDao.retrieveGbsAttByLeaderIdAndActiveTerm(
                    GbsParam.builder()
                            .leaderId(leaderInfo.getLeaderId())
                            .activeTerm(request.getActiveTerm())
                            .isThisWeek(true)
                            .build()
            );

            todayGbsAttList.add(
                    TodayGbsAtt.builder()
                            .leaderDetail(leaderInfo)
                            .saintAttList(saintAttList)
                            .build()
            );
        }

        log.debug("todayGbsAttList >> {}", todayGbsAttList);

        return todayGbsAttList;
    }

    //TODO naming 변경 필요 , 필요한 메소드일까?
    @Override
    public LeaderInfo retrieveLeaderInfo(LeaderRequest request) {

        Leader leader =  leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .leaderId(request.getLeaderId())
                        .build()
        );

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintId(leader.getSaintId())
                        .build()
        );

        return LeaderInfo.builder()
                .leader(leader)
                .saint(saint)
                .build();
    }

    @Override
    @Transactional
    public Integer registerLeader(LeaderRequest request) {
        log.debug("[registerLeader] params >> {}", request);

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(request.getSaintName())
                        .build()
        );

        String encodedPassword = new BCryptPasswordEncoder().encode(request.getPassword());

        // TODO Sequence 로 채번하기

        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(
                Optional.ofNullable(request.getRole()).orElse(RoleCodeEnum.LEADER).getCode()
        );

        Leader leader = Leader.builder()
                .saintId(saint.getSaintId())
                .active(Optional.ofNullable(request.getActive()).orElse(YnEnum.Y.name()))
                .password(encodedPassword)
                .authorities(authorities)
                .role(Optional.ofNullable(request.getRole()).orElse(RoleCodeEnum.LEADER).getCode()).build();

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
