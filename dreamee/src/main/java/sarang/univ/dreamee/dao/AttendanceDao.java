package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Attendance;

import java.util.List;

@Repository
public interface AttendanceDao {
    List<Attendance> retrieveAllAttendanceLog();
    int registerAttendanceLog(Attendance attendance);
}
