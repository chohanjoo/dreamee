package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.DeptDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Saint;
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

    @Override
    public List<Saint> retrieveAllSaint() {
        return saintDao.retrieveAllSaint();
    }

    @Override
    public Saint retrieveSaintByName(String saintName) {
        return saintDao.retrieveSaintByName(saintName);
    }

    @Override
    public Saint retrieveSaintById(Integer saintId) {
        return saintDao.retrieveSaintById(saintId);
    }

    @Override
    public Saint retrieveSaint(RetrieveSaintRequest request) {
        log.debug("[retrieveSaint] params >> {}", request);

        return saintDao.retrieveSaint(
                SaintParam.builder()
                        .saintId(request.getSaintId())
                        .saintName(request.getSaintName())
                        .build()
        );
    }

    @Override
    public Integer registerSaint(SaintRequest request) {
        Dept dept = deptDao.retrieveDeptByName(request.getDept().getName());
        Saint saint = Saint.builder()
                .name(request.getName())
                .deptId(dept.getDeptId())
                .age(request.getAge())
                .preChurch(request.getPreChurch())
                .gender(request.getGender())
                .major(request.getMajor())
                .address(request.getAddress())
                .birthday(request.getBirthday())
                .baptism(request.getBaptism())
                .discipleTraining(request.getDiscipleTraining()).build();

        int result = saintDao.registerSaint(saint);

        return result;
    }
}
