package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Attendance;
import sarang.univ.dreamee.request.AttendanceRequest;

import java.util.List;
import java.util.Map;

public interface AttendanceService {
    List<Attendance> retrieveAllAttendanceLog();
    List<Attendance> retrieveAllAttendanceListByGbs(Integer leaderId, String activeTerm);
    int registerAttendanceLog(String saintName, AttendanceRequest request);
}
