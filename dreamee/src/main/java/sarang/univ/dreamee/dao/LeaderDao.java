package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.LeaderDetail;
import sarang.univ.dreamee.param.LeaderParam;

import java.util.List;

@Repository
public interface LeaderDao {
    List<Leader> retrieveAllLeader();
    List<LeaderDetail> retrieveLeaderList(LeaderParam param);
    Leader retrieveLeader(LeaderParam param);
    int registerLeader(Leader leader);
}
