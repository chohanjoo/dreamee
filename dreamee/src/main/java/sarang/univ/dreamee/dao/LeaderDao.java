package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;

import java.util.List;

@Repository
public interface LeaderDao {
    List<Leader> retrieveAllLeader();
    Leader retrieveLeaderBySaintId(Integer saintId);
    Leader retrieveLeader(LeaderRequest request);
    int registerLeader(Leader leader);
}
