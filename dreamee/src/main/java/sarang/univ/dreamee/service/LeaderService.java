package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;

import java.util.List;

public interface LeaderService {
    List<Leader> retrieveAllLeader();
    Leader retrieveLeaderBySaintId(Integer saintId);
    Integer registerLeader(LeaderRequest request);
}
