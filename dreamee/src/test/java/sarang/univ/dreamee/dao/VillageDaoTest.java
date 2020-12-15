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
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.dto.Village;

import java.util.List;

import static org.assertj.core.api.BDDAssertions.then;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class VillageDaoTest {
    @Autowired
    private VillageDao villageDao;

    @Autowired
    private SaintDao saintDao;

    @Autowired
    private PastorDao pastorDao;

    @Autowired
    private DeptDao deptDao;

    private Village village;

    @Before
    public void setup() {
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

        village = Village.builder()
                .villageName("!마을")
                .saintId(saint.getSaintId()).build();
    }

    @Test
    public void retrieveAllVillageTest() {
        List<Village> villages = villageDao.retrieveAllVillage();

        log.info("village list : {}", villages);
    }

    @Test
    public void retrieveVillageBySaintIdTest() {

    }

    @Test
    public void registerVillage() {
        int result = villageDao.registerVillage(village);

        then(result).isEqualTo(1);
    }
}
