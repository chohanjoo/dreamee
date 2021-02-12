package sarang.univ.dreamee.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.request.retrieve.RetrieveGbsRequest;
import sarang.univ.dreamee.response.type.GbsMember;

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
        List<GbsMember> saints = gbsService.retrieveGbsMemberList(
                RetrieveGbsRequest.builder()
                        .leaderName("가그린4")
                        .build());

        log.info("saints : {}", saints);
    }
}
