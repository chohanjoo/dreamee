package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.GbsRequest;

import java.util.List;

public interface GbsService {
    List<Dept> retrieveAllGbsLog();
    List<Saint> retrieveGbsMemberListByLeaderName(String leaderName);
    List<Gbs> retrieveGbsByLeaderName(String leaderName);
    List<Gbs> retrieveGbsBySaintName(String saintName);
    List<Gbs> retrieveGbsByVillageName(String villageName);
    List<Gbs> retrieveGbsBySaintNameAndLeaderName(GbsRequest request) throws Exception;
    Integer registerGbs(GbsRequest request) throws Exception;
}
