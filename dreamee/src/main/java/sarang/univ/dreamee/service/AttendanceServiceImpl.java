package sarang.univ.dreamee.service;

import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.ListUtils;
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
    public List<Attendance> retrieveAllAttendanceListByGbs(Integer leaderId, String activeTerm) {
        Gbs gbs = Gbs.builder()
                .leaderId(leaderId)
                .activeTerm(activeTerm).build();

        List<Gbs> gbsList = gbsDao.retrieveGbsByLeaderIdAndActiveTerm(gbs);
        List<Attendance> attendanceList = Lists.newArrayList();

        for(Gbs member : gbsList) {
            List<Attendance> saintAttLog = attendanceDao.retrieveAttendanceListByGbsId(member.getGbsId());
            attendanceList = ListUtils.union(attendanceList, saintAttLog);
        }

        return attendanceList;
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
