package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.DeptService;
import sarang.univ.dreamee.service.GbsService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"3. GBS"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/gbs")
public class GbsController {

    private final GbsService gbsService;
    private final ResponseService responseService;

    @ApiOperation(value = "GBS 조회", notes = "GBS를 조회한다")
    @GetMapping(value = "")
    public ListResult<Gbs> retrieveGbs(@RequestParam String leaderName) {
        log.info(leaderName);
        return responseService.getListResult(gbsService.retrieveGbsByLeaderName(leaderName));
    }

    @ApiOperation(value = "GBS Member List 조회", notes = "GBS Member List를 조회한다")
    @GetMapping(value = "/members")
    public ListResult<Saint> retrieveGbsMemberList(@RequestParam String leaderName) {
        log.info(leaderName);
        return responseService.getListResult(gbsService.retrieveGbsMemberListByLeaderName(leaderName));
    }
}
