package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.LeaderDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.List;

@RequiredArgsConstructor
@Service
public class LeaderServiceImpl implements LeaderService{
    private final LeaderDao leaderDao;
    private final SaintDao saintDao;

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
    public Integer registerLeader(LeaderRequest request) {
        Saint saint = saintDao.retrieveSaintByName(request.getSaintName());
        Leader leader = Leader.builder()
                .saintId(saint.getSaintId())
                .active(request.getActive())
                .password(request.getPassword())
                .role(request.getRole()).build();

        int result = leaderDao.registerLeader(leader);
        return result;
    }
}
