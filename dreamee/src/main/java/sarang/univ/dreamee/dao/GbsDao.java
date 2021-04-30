package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.param.GbsParam;
import sarang.univ.dreamee.request.GbsRequest;
import sarang.univ.dreamee.response.type.SaintAtt;

import java.util.List;

@Repository
public interface GbsDao {
    List<Gbs> retrieveAllGbsLog();
    List<Gbs> retrieveGbsList(GbsParam params);
    List<Gbs> retrieveGbsByLeaderId(Integer leaderId);
    List<Gbs> retrieveGbsBySaintId(Integer saintId);
    List<Gbs> retrieveGbsByVillageId(Integer villageId);
    List<Gbs> retrieveGbsBySaintNameAndLeaderName(Gbs gbs);
    Gbs retrieveGbsByLeaderIdAndSaintIdAndActiveTerm(Gbs gbs);
    List<Gbs> retrieveGbsByLeaderIdAndActiveTerm(GbsParam param);
    List<SaintAtt> retrieveGbsAttByLeaderIdAndActiveTerm(GbsParam param);
    Integer registerGbs(Gbs gbs);
}
