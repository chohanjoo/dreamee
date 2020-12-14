package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.DeptDao;
import sarang.univ.dreamee.dao.PastorDao;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.request.PastorRequest;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DeptServiceImpl implements DeptService{
    private final DeptDao deptDao;
    private final PastorDao pastorDao;

    @Override
    public List<Dept> retrieveAllDept() {
        return deptDao.retrieveAllDept();
    }

    @Override
    public Dept retrieveDeptByName(String DeptName) {
        return null;
    }

    @Override
    public Integer registerDept(DeptRequest request) {
        Pastor pastor = pastorDao.retrievePastorByName(request.getPastorName());
        Dept dept = Dept.builder()
                .deptName(request.getDeptName())
                .deptLocation(request.getDeptLocation())
                .pastorId(pastor.getPastorId())
                .build();

        int result = deptDao.registerDept(dept);

        return result;
    }
}
