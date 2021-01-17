package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Repository
public interface SaintDao {
    List<Saint> retrieveAllSaint();
    //TODO retrieveBySaint 로 병합
    Saint retrieveSaintByName(String saintName);
    Saint retrieveSaintById(Integer saintId);
    int registerSaint(Saint saint);
}
