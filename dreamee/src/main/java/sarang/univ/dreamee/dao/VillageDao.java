package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Village;

import java.util.List;

@Repository
public interface VillageDao {
    List<Village> retrieveAllVillage();
    Village retrieveVillageBySaintId(Integer saintId);
    Village retrieveVillageByVillageName(String villageName);
    int registerVillage(Village village);
}
