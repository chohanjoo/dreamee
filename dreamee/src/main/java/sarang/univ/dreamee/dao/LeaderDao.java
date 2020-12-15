package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Leader;

import java.util.List;

@Repository
public interface LeaderDao {
    List<Leader> retrieveAllLeader();
    Leader retrieveLeaderBySaintId(Integer saintId);
    int registerLeader(Leader leader);
}
