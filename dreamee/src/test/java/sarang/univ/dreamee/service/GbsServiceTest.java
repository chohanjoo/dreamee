package sarang.univ.dreamee.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.Saint;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class GbsServiceTest {

    @Autowired
    private GbsService gbsService;

    @Test
    public void retrieveGbsMemberListByLeaderNameTest() {
        List<Saint> saints = gbsService.retrieveGbsMemberListByLeaderName("가그린4");

        log.info("saints : {}", saints);
    }
}
