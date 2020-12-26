package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Attendance;
import sarang.univ.dreamee.request.AttendanceRequest;

import java.util.List;

public interface AttendanceService {
    List<Attendance> retrieveAllAttendanceLog();
    int registerAttendanceLog(String saintName, AttendanceRequest request);
}
