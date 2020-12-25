package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.request.PastorRequest;

import java.util.List;

public interface DeptService {
    List<Dept> retrieveAllDept();
    Dept retrieveDeptByName(String DeptName);
    Dept retrieveDeptByDeptId(Integer deptId);
    Integer registerDept(DeptRequest request);
}
