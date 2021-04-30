package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Gbs;
import sarang.univ.dreamee.request.GbsRequest;
import sarang.univ.dreamee.request.RegisterGbsRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveGbsRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.response.type.GbsMember;
import sarang.univ.dreamee.service.GbsService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"6. Gbs"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/gbs")
public class GbsController {

    private final GbsService gbsService;
    private final ResponseService responseService;

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "GBS 조회", notes = "GBS를 조회한다")
    @GetMapping(value = "")
    public ListResult<Gbs> retrieveGbs(@RequestParam String leaderName) {
        log.info(leaderName);
        return responseService.getListResult(gbsService.retrieveGbsByLeaderName(leaderName));
    }


    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "GBS Member List 조회", notes = "GBS Member List를 조회한다")
    @PostMapping(value = "/members")
    public ListResult<GbsMember> retrieveGbsMemberList(@RequestBody RetrieveGbsRequest request) {
        log.debug("GbsController.retrieveGbsMemberList");

        return responseService.getListResult(gbsService.retrieveGbsMemberList(request));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "GBS Leader List 조회", notes = "GBS Leader List를 조회한다")
    @PostMapping(value = "/leaders")
    public ListResult<GbsMember> retrieveGbsLeaderList(@RequestBody GbsRequest request) {
        log.debug("GbsController.retrieveGbsLeaderList");

        return responseService.getListResult(gbsService.retrieveGbsLeaderList(request));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "GBS 등록", notes = "GBS 등록한다.")
    @PostMapping(value = "/registerGbs")
    public SingleResult<Integer> registerGbs(@RequestBody @Validated RegisterGbsRequest request) throws Exception {
        log.debug("GbsController.registerGbs");

        return responseService.getSingleResult(gbsService.registerGbs(request));
    }

}
