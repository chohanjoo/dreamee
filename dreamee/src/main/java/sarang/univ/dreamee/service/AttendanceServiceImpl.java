package sarang.univ.dreamee.service;

import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.ListUtils;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.*;
import sarang.univ.dreamee.dto.*;
import sarang.univ.dreamee.exception.ExceptionBuilder;
import sarang.univ.dreamee.exception.error.DreameeError;
import sarang.univ.dreamee.param.AttParam;
import sarang.univ.dreamee.param.GbsParam;
import sarang.univ.dreamee.request.AttendanceRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveAttendanceRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.response.type.SaintAtt;
import sarang.univ.dreamee.utils.DatetimeUtils;

import java.util.List;

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
                        .isThisYear(request.isThisYear())
                        .build()
        );
    }

    @Override
    public Attendance registerAttendanceLog(String saintName, AttendanceRequest request) {

        log.debug("[registerAttendanceLog] params >> {}", request);

        Saint saint = saintService.retrieveSaint(
                RetrieveSaintRequest.builder()
                        .saintName(saintName)
                        .build()
        );

        if (null == saint) {
            throw ExceptionBuilder.of(DreameeError.DREAMEE_SAINT_NOT_FOUND)
                    .notificationMessage(String.format("saint not found; saintName = %s", saintName))
                    .build();
        }

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

        log.debug("[registerAttendanceLog] attendance >> {}", attendance);

        if (null == registeredAtt) {
            if (request.getIsAttend()) {
                attendanceDao.registerAttendanceLog(attendance);
            }

        } else {
            if (request.getIsAttend()) {
                // 기존 저장된 데이터인 경우 업데이트 해준다.
                attendance.setAttId(registeredAtt.getAttId());

                attendanceDao.updateAttendanceLog(attendance);
            } else {
                attendanceDao.deleteAttendanceLog(attendance);
            }
        }


        return attendance;
    }
}
