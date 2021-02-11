package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.param.SaintParam;

import java.util.List;

@Repository
public interface SaintDao {
    List<Saint> retrieveAllSaint();
    //TODO retrieveBySaint 로 병합
    Saint retrieveSaintByName(String saintName);
    Saint retrieveSaintById(Integer saintId);
    Saint retrieveSaint(SaintParam param);
    int registerSaint(Saint saint);
}
