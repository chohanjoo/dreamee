package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Repository
public interface SaintDao {
    List<Saint> retrieveAllSaint();
    Saint retrieveSaintByName(String saintName);
    int registerSaint(Saint saint);
}
