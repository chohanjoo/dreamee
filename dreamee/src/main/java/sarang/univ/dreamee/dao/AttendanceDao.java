package sarang.univ.dreamee.dao;

import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Attendance;
import sarang.univ.dreamee.param.AttParam;
import sarang.univ.dreamee.request.RetrieveAttendanceRequest;
import sarang.univ.dreamee.response.type.SaintAtt;

import java.util.List;

@Repository
public interface AttendanceDao {
    List<Attendance> retrieveAllAttendanceLog();
    List<Attendance> retrieveAttendanceListByGbsId(Integer gbsId);
    List<SaintAtt> retrieveAttendanceList(AttParam params);
    int registerAttendanceLog(Attendance attendance);
}
