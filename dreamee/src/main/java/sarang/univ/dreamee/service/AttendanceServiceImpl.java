package sarang.univ.dreamee.service;

import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.ListUtils;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.*;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.enums.VillageEnum;
import sarang.univ.dreamee.param.AttParam;
import sarang.univ.dreamee.param.GbsParam;
import sarang.univ.dreamee.request.AttendanceRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveAttendanceRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.response.type.SaintAtt;
import sarang.univ.dreamee.utils.DatetimeUtils;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class AttendanceServiceImpl implements AttendanceService{
    private final AttendanceDao attendanceDao;
    private final SaintDao saintDao;
    private final LeaderDao leaderDao;
    private final GbsDao gbsDao;

    private final SaintService saintService;

    @Override
    public List<Attendance> retrieveAllAttendanceLog() {
        return attendanceDao.retrieveAllAttendanceLog();
    }

    @Override
    public List<Attendance> retrieveAllAttendanceListByGbs(Integer leaderId, String activeTerm) {
        List<Gbs> gbsList = gbsDao.retrieveGbsByLeaderIdAndActiveTerm(
                GbsParam.builder()
                        .leaderId(leaderId)
                        .activeTerm(activeTerm)
                        .build()
        );

        List<Attendance> attendanceList = Lists.newArrayList();

        for(Gbs member : gbsList) {
            List<Attendance> saintAttLog = attendanceDao.retrieveAttendanceListByGbsId(member.getGbsId());
            attendanceList = ListUtils.union(attendanceList, saintAttLog);
        }

        return attendanceList;
    }

    @Override
    public List<SaintAtt> retrieveAttendanceList(RetrieveAttendanceRequest request) {

        log.debug("[retrieveAttendanceList] params >> {}", request);

        return attendanceDao.retrieveAttendanceList(
                AttParam.builder()
                        .saintId(request.getSaintId())
                        .saintName(request.getSaintName())
                        .villageName(Optional.ofNullable(request.getVillageCode()).map(VillageEnum::getName).orElse(null))
                        .isThisYear(request.isThisYear())
                        .searchDate(request.getSearchDate())
                        .build()
        );
    }

    @Override
    public Attendance registerAttendanceLog(String saintName, AttendanceRequest request) {
        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(saintName)
                        .build()
        );

        Attendance registeredAtt = attendanceDao.retrieveAttendance(
                AttParam.builder()
                        .saintId(saint.getSaintId())
                        .build()
        );

        Attendance attendance = Attendance.builder()
                .attState(request.getAttState())
                .qtNumber(request.getQtNumber())
                .worshipState(request.getWorshipState())
                .saintId(saint.getSaintId())
                .gbsId(request.getGbsId())
                .dateCreated(DatetimeUtils.getDatetime())
                .dateUpdated(DatetimeUtils.getDatetime())
                .build();

        if (null == registeredAtt) {
            attendanceDao.registerAttendanceLog(attendance);
        } else {
            attendance.setAttId(registeredAtt.getAttId());

            attendanceDao.updateAttendanceLog(attendance);
        }


        return attendance;
    }
}
