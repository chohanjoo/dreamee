package sarang.univ.dreamee.dao;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class SaintDaoTest {
    @Autowired
    private SaintDao saintDao;

    @Test
    public void retrieveAllSaintTest(){
        List<Saint> saints = saintDao.retrieveAllSaint();

        log.info("saints : {}", saints);
    }

    @Test
    public void retrieveSaintTest(){
        Saint saint = saintDao.retrieveSaintByName("ju");

        log.info("saint : {}", saint);
    }

    @Test
    public void registerSaintTest(){
        Saint saint = Saint.builder()
                .name("Test").build();
        int saintId = saintDao.registerSaint(saint);
    }
}
