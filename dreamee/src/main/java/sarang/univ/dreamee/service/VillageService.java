package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Village;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.VillageRequest;

import java.util.List;

public interface VillageService {
    List<Village> retrieveAllVillage();
    Village retrieveVillageBySaintId(Integer saintId);
    Village retrieveVillageByVillageId(Integer villageId);
    Integer registerVillage(VillageRequest request);
}
