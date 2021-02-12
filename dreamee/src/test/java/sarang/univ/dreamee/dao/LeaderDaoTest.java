package sarang.univ.dreamee.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.param.LeaderParam;

import java.util.List;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.BDDMockito.given;


@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class LeaderDaoTest {
    @Autowired
    private LeaderDao leaderDao;

    @Autowired
    private SaintDao saintDao;

    @Autowired
    private DeptDao deptDao;

    @Autowired
    private PastorDao pastorDao;

    @Test
    public void retrieveAllLeaderTest(){
        List<Leader> leaders = leaderDao.retrieveAllLeader();

        log.info("leaders : {}", leaders);
    }

    @Test
    public void retrieveLeaderTest(){
        Leader leader = leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .saintId(1)
                        .build()
        );

        log.info("leader : {}", leader);
    }

    //TODO  리펙토링 필요
    @Test
    public void registerLeaderTest(){
        pastorDao.registerPastor("박요한");
        Pastor pastor = pastorDao.retrievePastorByName("박요한");
        Dept dept = Dept.builder()
                .deptLocation("은혜채플")
                .pastorId(pastor.getPastorId())
                .deptName("대학4부").build();

        deptDao.registerDept(dept);
        Dept dept1 = deptDao.retrieveDeptByName("대학4부");


        Saint newSaint = Saint.builder()
                .name("조한주")
                .deptId(dept1.getDeptId()).build();
        saintDao.registerSaint(newSaint);

        Saint saint = saintDao.retrieveSaintByName(newSaint.getName());

        Leader leader = Leader.builder()
                .role("리더")
                .password("1q2w3e4r")
                .active("Y")
                .saintId(saint.getSaintId()).build();

        int result = leaderDao.registerLeader(leader);

        then(result).isEqualTo(1);
    }
}
