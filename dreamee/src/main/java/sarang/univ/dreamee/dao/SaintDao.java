package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.param.SaintParam;

import java.util.List;

@Repository
public interface SaintDao {
    List<Saint> retrieveAllSaint();
    Saint retrieveSaint(SaintParam param);
    List<Saint> retrieveSaintDetailList(SaintParam param);
    int registerSaint(Saint saint);
}
