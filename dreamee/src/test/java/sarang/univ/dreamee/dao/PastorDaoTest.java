package sarang.univ.dreamee.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class PastorDaoTest {
    @Autowired
    private PastorDao pastorDao;

    @Test
    public void retrieveAllPastorTest(){
        List<Pastor> pastors = pastorDao.retrieveAllPastor();

        log.info("pastors : {}", pastors);
    }

    @Test
    public void retrievePastorByNameTest(){
        Pastor pastor = pastorDao.retrievePastorByName("han");

        log.info("pastor : {}", pastor);
    }

    @Test
    public void registerPastorTest(){
        int result = pastorDao.registerPastor("hanjoo");

        log.info("result = {}", result);
    }
}
