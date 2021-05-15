package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.request.DeptRequest;

import java.util.List;
import java.util.Map;

public interface DeptService {
    List<Dept> retrieveAllDept();
    Dept retrieveDeptByDeptId(Integer deptId);
    Integer registerDept(DeptRequest request);
    Map<String, String> getDeptTypeList();
}
