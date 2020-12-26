package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.AttendanceRequest;
import sarang.univ.dreamee.response.CommonResult;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.AttendanceService;
import sarang.univ.dreamee.service.GbsService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"7. Attendance"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;
    private final ResponseService responseService;

//    @ApiOperation(value = "Attendance 조회", notes = "성도 출석부를 조회한다")
//    @PostMapping(value = "")
//    public ListResult<Gbs> retrieveSaintAttendanceList(@RequestParam String leaderName) {
//        log.info(leaderName);
//        return responseService.getListResult(gbsService.retrieveGbsByLeaderName(leaderName));
//    }

    @ApiOperation(value = "출석부 log 등록", notes = "출석부 log를 등록한다.")
    @PostMapping(value = "/{saintName}")
    public CommonResult registerSaintAttendance(@PathVariable String saintName, @RequestBody AttendanceRequest request) {
        log.info("name : {}", saintName);
        attendanceService.registerAttendanceLog(saintName, request);
        return responseService.getSuccessResult();
    }
}
