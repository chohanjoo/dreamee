package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.*;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.request.GbsRequest;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GbsServiceImpl implements GbsService{
    private final SaintDao saintDao;
    private final LeaderDao leaderDao;
    private final VillageDao villageDao;
    private final GbsDao gbsDao;

    @Override
    public List<Dept> retrieveAllGbsLog() {
        return retrieveAllGbsLog();
    }

    @Override
    public List<Gbs> retrieveGbsByLeaderName(String leaderName) {
        // TODO 이름이 중복일 때, Error 발생
        Saint saint = saintDao.retrieveSaintByName(leaderName);
        Leader leader = leaderDao.retrieveLeaderBySaintId(saint.getSaintId());

        return gbsDao.retrieveGbsByLeaderName(leader.getLeaderId());
    }

    @Override
    public List<Gbs> retrieveGbsBySaintName(String saintName) {
        Saint saint = saintDao.retrieveSaintByName(saintName);

        return gbsDao.retrieveGbsBySaintName(saint.getSaintId());
    }

    @Override
    public List<Gbs> retrieveGbsByVillageName(String villageName) {
        Village village = villageDao.retrieveVillageByVillageName(villageName);
        return gbsDao.retrieveGbsByVillageName(village.getVillageId());
    }

    @Override
    public List<Gbs> retrieveGbsBySaintNameAndLeaderName(GbsRequest request) throws Exception {
        try {
            Saint saint = saintDao.retrieveSaintByName(request.getSaintName());
            Saint _leader = saintDao.retrieveSaintByName(request.getLeaderName());
            Leader leader = leaderDao.retrieveLeaderBySaintId(_leader.getSaintId());

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
    public Integer registerGbs(GbsRequest request) throws Exception {
        try {
            Saint saint = saintDao.retrieveSaintByName(request.getSaintName());
            Saint _leader = saintDao.retrieveSaintByName(request.getLeaderName());
            Leader leader = leaderDao.retrieveLeaderBySaintId(_leader.getSaintId());
            Village village = villageDao.retrieveVillageByVillageName(request.getVillageName());

            Gbs gbs = Gbs.builder()
                    .leaderId(leader.getLeaderId())
                    .saintId(saint.getSaintId())
                    .villageId(village.getVillageId()).build();

            return gbsDao.registerGbs(gbs);
        } catch (Exception e) {
            throw new Exception();
            // TODO request 정보가 올바르지 않을 때
        }
    }
}
