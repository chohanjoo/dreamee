package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.DeptDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dao.VillageDao;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.dto.Village;
import sarang.univ.dreamee.param.SaintParam;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SaintServiceImpl implements SaintService{

    private final SaintDao saintDao;
    private final DeptDao deptDao;
    private final VillageDao villageDao;

    @Override
    public List<Saint> retrieveAllSaint() {
        return saintDao.retrieveAllSaint();
    }

    @Override
    public Saint retrieveSaint(RetrieveSaintRequest request) {
        log.debug("[retrieveSaint] params >> {}", request);

        if(
                request.getSaintId() == null
                && request.getSaintName() == null
        ) {

            //TODO throw Exception
        }

        return saintDao.retrieveSaint(
                SaintParam.builder()
                        .saintId(request.getSaintId())
                        .saintName(request.getSaintName())
                        .build()
        );
    }

    @Override
    public Integer registerSaint(SaintRequest request) {

        log.debug("[registerSaint] params >> {}", request);

        Dept dept = deptDao.retrieveDeptByName(request.getDept().getName());
        Village village = villageDao.retrieveVillageByVillageName(request.getVillage().getName());

        Saint saint = Saint.builder()
                .name(request.getName())
                .deptId(dept.getDeptId())
                .villageId(village.getVillageId())
                .age(request.getAge())
                .preChurch(request.getPreChurch())
                .gender(request.getGender())
                .major(request.getMajor())
                .address(request.getAddress())
                .birthday(request.getBirthday())
                .baptism(request.getBaptism())
                .discipleTraining(request.getDiscipleTraining()).build();

        return saintDao.registerSaint(saint);
    }
}
