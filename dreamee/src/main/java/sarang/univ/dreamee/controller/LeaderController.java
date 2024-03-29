package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.RegisterGbsRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.response.type.TodayGbsAtt;
import sarang.univ.dreamee.service.LeaderService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"4. Leader"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/leader")
public class LeaderController {

    private final LeaderService leaderService;
    private final ResponseService responseService;

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "리더 리스트 조회", notes = "모든 리더를 조회한다")
    @GetMapping(value = "/retrieveActiveLeaderList")
    public ListResult<Leader> retrieveActiveLeaderList() {
        return responseService.getListResult(leaderService.retrieveActiveLeaderList());
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "리더 조회", notes = "리더를 조회한다")
    @PostMapping(value = "/retrieveLeader")
    public SingleResult<Leader> retrieveLeader(@RequestBody RetrieveLeaderRequest request) {
        log.debug("LeaderController.retrieveLeader");

        return responseService.getSingleResult(leaderService.retrieveLeader(request));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "마을의 목장 출석부 조회", notes = "마을의 목장 출석부 조회")
    @PostMapping(value = "/retrieveLeaderGroupOnVillageList")
    public ListResult<TodayGbsAtt> retrieveLeaderGroupOnVillageList(@RequestBody @Validated RetrieveLeaderRequest request) {
        log.debug("GbsController.retrieveLeaderGroupOnVillageList");

        return responseService.getListResult(leaderService.retrieveLeaderGroupOnVillageList(request));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "리더 등록", notes = "리더를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerLeader(@RequestBody LeaderRequest request) {
        log.debug("LeaderController.registerLeader");

        int result = leaderService.registerLeader(request);
        return responseService.getSingleResult(result);
    }
}
