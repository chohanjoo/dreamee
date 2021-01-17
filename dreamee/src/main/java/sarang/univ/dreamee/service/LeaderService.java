package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.List;

public interface LeaderService {
    List<Leader> retrieveAllLeader();
    Leader retrieveLeaderBySaintId(Integer saintId); //TODO 후에 fade out
    LeaderInfo retrieveLeader(LeaderRequest request);
    Integer registerLeader(LeaderRequest request);
}
