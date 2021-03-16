package sarang.univ.dreamee.dao;

import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.ListUtils;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.param.AttParam;
import sarang.univ.dreamee.response.type.SaintAtt;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class AttendanceDaoTest {
    @Autowired
    private AttendanceDao attendanceDao;

    @Test
    public void retrieveAllAttendanceListByGbs(){
        // ListUtils.union -> 중복된 값 허용
        // ListUtils.sum -> x


    }

    @Test
    public void retrieveAttendanceList() {
        AttParam attParam = AttParam.builder()
                .saintId(13)
                .isThisYear(true)
                .build();

        List<SaintAtt> saintAtts = attendanceDao.retrieveAttendanceList(attParam);

        log.info("saintAtts >> {}", saintAtts);
    }
}
