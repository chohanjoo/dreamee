package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.dto.Village;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.LeaderService;
import sarang.univ.dreamee.service.ResponseService;
import sarang.univ.dreamee.service.VillageService;

@Api(tags = {"5. Village"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/village")
public class VillageController {

    private final VillageService villageService;
    private final ResponseService responseService;
//
//    @ApiOperation(value = "리더 리스트 조회", notes = "모든 리더를 조회한다")
//    @GetMapping(value = "/all")
//    public ListResult<Leader> retrieveAllVillage() {
//        return responseService.getListResult(leaderService.retrieveAllLeader());
//    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "마을 조회", notes = "마을을 조회한다")
    @GetMapping(value = "")
    public SingleResult<Village> retrieveVillage(@RequestParam Integer villageId) {
        return responseService.getSingleResult(villageService.retrieveVillageByVillageId(villageId));
    }

//    @ApiOperation(value = "리더 등록", notes = "리더를 등록한다")
//    @PostMapping
//    public SingleResult<Integer> registerVillage(@RequestBody LeaderRequest request) {
//        int result = leaderService.registerLeader(request);
//        return responseService.getSingleResult(result);
//    }
}
