package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.*;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.request.AttendanceRequest;
import sarang.univ.dreamee.utils.DatetimeUtils;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AttendanceServiceImpl implements AttendanceService{
    private final AttendanceDao attendanceDao;
    private final SaintDao saintDao;
    private final LeaderDao leaderDao;
    private final GbsDao gbsDao;

    @Override
    public List<Attendance> retrieveAllAttendanceLog() {
        return attendanceDao.retrieveAllAttendanceLog();
    }

    @Override
    public int registerAttendanceLog(String saintName, AttendanceRequest request) {
        Saint saint = saintDao.retrieveSaintByName(saintName);

//        Saint _leader = saintDao.retrieveSaintByName(request.getLeaderName());
//        Leader leader = leaderDao.retrieveLeaderBySaintId(_leader.getSaintId());
//
//        Gbs gbsInfo = Gbs.builder()
//                .saintId(saint.getSaintId())
//                .leaderId(leader.getLeaderId())
//                .activeTerm(request.getActiveTerm())
//                .build();
//
//        Gbs gbs = gbsDao.retrieveGbsByLeaderIdAndSaintIdAndActiveTerm(gbsInfo);

        Attendance attendance = Attendance.builder()
                .attState(request.getAttState())
                .qtNumber(request.getQtNumber())
                .worshipState(request.getWorshipState())
                .saintId(saint.getSaintId())
                .gbsId(request.getGbsId())
                .dateCreated(DatetimeUtils.getDatetime())
                .dateUpdated(DatetimeUtils.getDatetime())
                .build();

        int result = attendanceDao.registerAttendanceLog(attendance);

        return result;
    }
}
