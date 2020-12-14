package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Repository
public interface PastorDao {
    List<Pastor> retrieveAllPastor();
    Pastor retrievePastorByName(String pastorName);
    int registerPastor(String pastorName);
}
