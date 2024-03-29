package sarang.univ.dreamee.service;

import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.*;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.param.GbsParam;
import sarang.univ.dreamee.request.GbsRequest;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.RegisterGbsRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveGbsRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.response.type.GbsMember;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class GbsServiceImpl implements GbsService{

    private final SaintDao saintDao;
    private final LeaderDao leaderDao;
    private final VillageDao villageDao;
    private final GbsDao gbsDao;

    private final LeaderService leaderService;
    private final SaintService saintService;


    @Override
    public List<Dept> retrieveAllGbsLog() {
        return retrieveAllGbsLog();
    }

    @Override
    public List<GbsMember> retrieveGbsMemberList(RetrieveGbsRequest request) {  // 리더 이름으로 조회
        // TODO 한 텀만 가져오도록 구현 <- 지금은 여러텀 다 가져옴

        log.debug("[retrieveGbsMemberList] params >> {}", request);

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(request.getLeaderName())
                        .build()
        );

        Leader leader = leaderService.retrieveLeader(
                RetrieveLeaderRequest.builder()
                        .saintId(saint.getSaintId())
                        .build()
        );

        List<GbsMember> gbsMembers = Lists.newArrayList();

        List<Gbs> gbsList = gbsDao.retrieveGbsList(
                GbsParam.builder()
                        .leaderId(leader.getLeaderId())
                        .build()
        );

        for(Gbs gbs : gbsList) {
            Saint gbsMember = saintService.retrieveSaint(
                    RetrieveSaintRequest.builder()
                            .saintId(gbs.getSaintId())
                            .build()
            );

            GbsMember member = GbsMember.builder()
                    .gbs(gbs)
                    .saint(gbsMember)
                    .build();

            gbsMembers.add(member);
        }

        log.debug("[retrieveGbsMemberList] gbsMembers >> {}", gbsMembers);

        return gbsMembers;
    }

    @Override
    public List<Gbs> retrieveGbsByLeaderName(String leaderName) {
        // TODO 이름이 중복일 때, Error 발생
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

        return gbsDao.retrieveGbsByLeaderId(leader.getLeaderId());
    }

    @Override
    public List<GbsMember> retrieveGbsLeaderList(GbsRequest request) {

        log.debug("[retrieveGbsLeaderList] params >> {}", request);

        List<Gbs> gbsList = gbsDao.retrieveGbsBySaintId(request.getSaintId());
        log.debug("[retrieveGbsLeaderList] gbsList >> {}", gbsList);

        List<GbsMember> gbsMemberList = Lists.newArrayList();

        for(Gbs gbs : gbsList) {
            LeaderInfo leaderInfo = leaderService.retrieveLeaderInfo(
                    LeaderRequest.builder()
                    .leaderId(gbs.getLeaderId())
                    .build()
            );

            gbsMemberList.add(
                    GbsMember.builder()
                            .saint(leaderInfo.getSaint())
                            .gbs(gbs)
                            .build()
            );
        }

        log.debug("[retrieveGbsLeaderList] gbsLeaderList >> {}", gbsMemberList);

        return gbsMemberList;
    }

    @Override
    public List<Gbs> retrieveGbsByVillageName(String villageName) {
        Village village = villageDao.retrieveVillageByVillageName(villageName);
        return gbsDao.retrieveGbsByVillageId(village.getVillageId());
    }

    @Override
    public List<Gbs> retrieveGbsBySaintNameAndLeaderName(GbsRequest request) throws Exception {

        try {

            Saint saint = saintService.retrieveSaint(
                    RetrieveSaintRequest.builder()
                            .saintName(request.getSaintName())
                            .build()
            );

            Saint _leader = saintService.retrieveSaint(
                    RetrieveSaintRequest.builder()
                            .saintName(request.getLeaderName())
                            .build()
            );

            Leader leader = leaderService.retrieveLeader(
                    RetrieveLeaderRequest.builder()
                            .saintId(_leader.getSaintId())
                            .build()
            );

            Gbs gbs = Gbs.builder()
                    .saintId(saint.getSaintId())
                    .leaderId(leader.getLeaderId()).build();

            return gbsDao.retrieveGbsBySaintNameAndLeaderName(gbs);
        } catch (Exception e){
            throw new Exception();
            // TODO request에 saint, leader 정보가 없을 때
        }
    }

    @Override
    public Integer registerGbs(RegisterGbsRequest request) throws Exception {
        try {

            Saint saint = saintService.retrieveSaint(
                    RetrieveSaintRequest.builder()
                            .saintName(request.getSaintName())
                            .build()
            );

            Leader leader = leaderService.retrieveLeader(
                    RetrieveLeaderRequest.builder()
                            .saintName(request.getLeaderName())
                            .build()
            );

            Village village = villageDao.retrieveVillageByVillageName(request.getVillageName());

            Gbs gbs = Gbs.builder()
                    .leaderId(leader.getLeaderId())
                    .saintId(saint.getSaintId())
                    .villageId(village.getVillageId())
                    .activeTerm(request.getActiveTerm())
                    .build();

            return gbsDao.registerGbs(gbs);
        } catch (Exception e) {
            throw new Exception();
            // TODO request 정보가 올바르지 않을 때
        }
    }
}
