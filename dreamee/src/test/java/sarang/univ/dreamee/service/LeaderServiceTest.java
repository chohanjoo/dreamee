package sarang.univ.dreamee.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.response.type.TodayGbsAtt;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class LeaderServiceTest {

    @Autowired
    private LeaderService leaderService;

    @Test
    public void retrieveLeaderGroupOnVillageList() {
        List<TodayGbsAtt> todayGbsAttList = leaderService.retrieveLeaderGroupOnVillageList(
                RetrieveLeaderRequest.builder()
                        .leaderId(14)
                        .build()
        );

        log.info("todayGbsAttList : {}", todayGbsAttList);
    }
}
