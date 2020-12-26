package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.GbsRequest;
import sarang.univ.dreamee.response.type.GbsMember;

import java.util.List;

public interface GbsService {
    List<Dept> retrieveAllGbsLog();
    List<GbsMember> retrieveGbsMemberListByLeaderName(String leaderName);
    List<Gbs> retrieveGbsByLeaderName(String leaderName);
//    Gbs retrieveGbsByLeaderNameAndActiveTerm(GbsRequest request);
    List<Gbs> retrieveGbsBySaintName(String saintName);
    List<Gbs> retrieveGbsByVillageName(String villageName);
    List<Gbs> retrieveGbsBySaintNameAndLeaderName(GbsRequest request) throws Exception;
    Integer registerGbs(GbsRequest request) throws Exception;
}
