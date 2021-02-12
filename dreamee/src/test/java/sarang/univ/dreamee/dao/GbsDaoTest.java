package sarang.univ.dreamee.dao;

import static org.assertj.core.api.BDDAssertions.then;

import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.param.LeaderParam;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class GbsDaoTest {
    @Autowired
    private GbsDao gbsDao;

    @Autowired
    private SaintDao saintDao;

    @Autowired
    private LeaderDao leaderDao;

    @Autowired
    private PastorDao pastorDao;

    @Autowired
    private DeptDao deptDao;

    @Autowired
    private VillageDao villageDao;

    private Gbs gbs;

    @Before
    public void setup() {
        pastorDao.registerPastor("ABC");
        Pastor pastor = pastorDao.retrievePastorByName("ABC");

        Dept dept = Dept.builder()
                .deptLocation("장소")
                .pastorId(pastor.getPastorId())
                .deptName("가그린부").build();

        deptDao.registerDept(dept);
        dept = deptDao.retrieveDeptByName(dept.getDeptName());

        Saint saint = Saint.builder()
                .deptId(dept.getDeptId())
                .name("USER").build();

        saintDao.registerSaint(saint);
        saint = saintDao.retrieveSaintByName(saint.getName());

        Saint _leader = Saint.builder()
                .deptId(dept.getDeptId())
                .name("LEADER").build();

        saintDao.registerSaint(_leader);
        _leader = saintDao.retrieveSaintByName(_leader.getName());

        Leader leader = Leader.builder()
                .password("TEST")
                .role("리더")
                .saintId(_leader.getSaintId())
                .active("Y").build();

        leaderDao.registerLeader(leader);

        leader = leaderDao.retrieveLeader(
                LeaderParam.builder()
                        .saintId(leader.getSaintId())
                        .build()
        );

        Village village = Village.builder()
                .saintId(leader.getSaintId())
                .villageName("z마을").build();

        villageDao.registerVillage(village);
        village = villageDao.retrieveVillageByVillageName(village.getVillageName());

        gbs = Gbs.builder()
                .saintId(saint.getSaintId())
                .leaderId(leader.getLeaderId())
                .villageId(village.getVillageId()).build();
    }
    @Test
    public void retrieveAllGbsTest() {
        List<Gbs> gbsList = gbsDao.retrieveAllGbsLog();

        log.info("gbs list : {}", gbsList);
    }

    @Test
    public void registerGbs() {
        int result = gbsDao.registerGbs(gbs);

        then(result).isEqualTo(1);
    }
}
