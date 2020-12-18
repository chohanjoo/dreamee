package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Gbs;

import java.util.List;

@Repository
public interface GbsDao {
    List<Gbs> retrieveAllGbsLog();
    List<Gbs> retrieveGbsByLeaderName(Integer leaderId);
    List<Gbs> retrieveGbsBySaintName(Integer saintId);
    List<Gbs> retrieveGbsByVillageName(Integer villageId);
    List<Gbs> retrieveGbsBySaintNameAndLeaderName(Gbs gbs);
    Integer registerGbs(Gbs gbs);
}
