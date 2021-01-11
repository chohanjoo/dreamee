package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dao.VillageDao;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.dto.Village;
import sarang.univ.dreamee.request.VillageRequest;

import java.util.List;

@RequiredArgsConstructor
@Service
public class VillageServiceImpl implements VillageService {
    private final VillageDao villageDao;
    private final SaintDao saintDao;

    @Override
    public List<Village> retrieveAllVillage() {
        return villageDao.retrieveAllVillage();
    }

    @Override
    public Village retrieveVillageBySaintId(Integer saintId) {
        return villageDao.retrieveVillageBySaintId(saintId);
    }

    @Override
    public Village retrieveVillageByVillageId(Integer villageId) {
        return villageDao.retrieveVillageByVillageId(villageId);
    }

    @Override
    public Integer registerVillage(VillageRequest request) {
        Saint saint = saintDao.retrieveSaintByName(request.getSaintName());
        Village village = Village.builder()
                .villageName(request.getVillageName())
                .saintId(saint.getSaintId()).build();

        return villageDao.registerVillage(village);
    }
}
