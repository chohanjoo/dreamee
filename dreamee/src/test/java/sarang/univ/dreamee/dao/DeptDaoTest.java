package sarang.univ.dreamee.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.Dept;

import java.util.List;
import java.util.Map;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class DeptDaoTest {
    @Autowired
    private DeptDao deptDao;

    private Dept dept;

    @Before
    public void setup(){
        dept = Dept.builder()
                .pastorId(1)
                .deptName("대학4부")
                .deptLocation("은혜채플").build();
    }

    @Test
    public void retrieveAllDeptTest(){
        List<Dept> depts = deptDao.retrieveAllDept();

        log.info("depts : {}", depts);
    }

    @Test
    public void retrieveDeptByName(){
        deptDao.registerDept(dept);
        Dept dept = deptDao.retrieveDeptByName("대학4부");

        log.info("dept : {}", dept);
    }

    @Test
    public void registerPastorTest(){
        int result = deptDao.registerDept(dept);

        log.info("result = {}", result);
    }
}
