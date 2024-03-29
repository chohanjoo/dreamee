package sarang.univ.dreamee.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.enums.DeptEnum;
import sarang.univ.dreamee.enums.RoleCodeEnum;
import sarang.univ.dreamee.param.LeaderParam;
import sarang.univ.dreamee.param.SaintParam;

import java.util.List;

import static org.assertj.core.api.BDDAssertions.then;


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
    public void retrieveActiveLeaderList(){
        List<Leader> leaders = leaderDao.retrieveActiveLeaderList(
                LeaderParam.builder()
                        .roleCode(RoleCodeEnum.LEADER.getCode())
                        .deptName(DeptEnum.UNIV_4.getName())
                        .build()
        );

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

        Saint saint = saintDao.retrieveSaint(
                SaintParam.builder()
                        .saintName(newSaint.getName())
                        .build()
        );

        Leader leader = Leader.builder()
                .role("리더")
                .password("1q2w3e4r")
                .active("Y")
                .saintId(saint.getSaintId()).build();

        int result = leaderDao.registerLeader(leader);

        then(result).isEqualTo(1);
    }

    @Test
    public void retrieveLeaderList() {
        List<LeaderDetail> leaderDetails = leaderDao.retrieveLeaderList(
                LeaderParam.builder()
                        .villageId(4)
                        .build()
        );

        log.info("leaderInfos : {}", leaderDetails);
    }
}
