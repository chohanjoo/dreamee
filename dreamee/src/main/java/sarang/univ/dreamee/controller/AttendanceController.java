package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Attendance;
import sarang.univ.dreamee.request.AttendanceRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveAttendanceRequest;
import sarang.univ.dreamee.response.CommonResult;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.type.SaintAtt;
import sarang.univ.dreamee.service.AttendanceService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"7. Attendance"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;
    private final ResponseService responseService;

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "Attendance 조회", notes = "GBS별 성도 출석부를 조회한다")
    @GetMapping(value = "/{leaderId}/{activeTerm}")
    public ListResult<Attendance> retrieveSaintAttendanceListByGbs(@PathVariable Integer leaderId, @PathVariable String activeTerm) {
        log.info(leaderId + activeTerm);
        return responseService.getListResult(attendanceService.retrieveAllAttendanceListByGbs(leaderId,activeTerm));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "드림이 출석부 조회", notes = "드림이 출석부를 조회한다.")
    @PostMapping(value = "/saint")
    public ListResult<SaintAtt> retrieveSaintAttendanceList(@RequestBody RetrieveAttendanceRequest request) {
        log.debug("AttendanceController.retrieveSaintAttendanceList");
        return responseService.getListResult(attendanceService.retrieveAttendanceList(request));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "출석부 log 등록", notes = "출석부 log를 등록한다.")
    @PostMapping(value = "/{saintName}")
    public CommonResult registerSaintAttendance(@PathVariable String saintName, @RequestBody AttendanceRequest request) {
        log.info("name : {}", saintName);
        attendanceService.registerAttendanceLog(saintName, request);
        return responseService.getSuccessResult();
    }
}
