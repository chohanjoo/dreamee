package sarang.univ.dreamee.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import sarang.univ.dreamee.dao.AttendanceDao;
import sarang.univ.dreamee.dto.Attendance;

import java.util.List;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class AttendanceServiceTest {
    @Autowired
    private AttendanceService attendanceService;

    @Test
    public void retrieveAllAttendanceListByGbs(){
        // ListUtils.union -> 중복된 값 허용
        // ListUtils.sum -> x

        List<Attendance> result = attendanceService.retrieveAllAttendanceListByGbs(4,"2021-1");
        log.info("result : {}", result);
    }
}
