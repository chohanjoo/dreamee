package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Dept;

import java.util.List;

@Repository
public interface DeptDao {
    List<Dept> retrieveAllDept();
    Dept retrieveDeptByName(String DeptName);
    int registerDept(Dept dept);
}
