package sarang.univ.dreamee.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class VillageServiceTest {

    @Autowired
    private VillageService villageService;

    @Test
    public void getVillageTypeList() {
        Map<String, String> villageTypeList = villageService.getVillageTypeList();

        log.info("villageTypeList : {}", villageTypeList);
    }
}
