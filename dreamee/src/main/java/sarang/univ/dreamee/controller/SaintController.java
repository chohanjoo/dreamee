package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.SaintRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.ResponseService;
import sarang.univ.dreamee.service.SaintService;

@Api(tags = {"1. Saint"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/saint")
public class SaintController {

    private final SaintService saintService;
    private final ResponseService responseService;

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "성도 리스트 조회", notes = "모든 회원을 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Saint> retrieveAllSaint() {
        return responseService.getListResult(saintService.retrieveAllSaint());
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "성도 조회", notes = "성도를 조회한다")
    @GetMapping(value = "")
    public SingleResult<Saint> retrieveSaint(@RequestParam Integer saintId) {
        return responseService.getSingleResult(saintService.retrieveSaintById(saintId));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "성도 등록", notes = "모든 회원을 조회한다")
    @PostMapping
    public SingleResult<Integer> registerSaint(@RequestBody SaintRequest request) {
        int saintId = saintService.registerSaint(request);
        return responseService.getSingleResult(saintId);
    }
}
