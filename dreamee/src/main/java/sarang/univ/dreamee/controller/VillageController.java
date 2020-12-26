package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.LeaderService;
import sarang.univ.dreamee.service.ResponseService;

@Api(tags = {"5. Village"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/village")
public class VillageController {

    private final LeaderService leaderService;
    private final ResponseService responseService;

    @ApiOperation(value = "리더 리스트 조회", notes = "모든 리더를 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Leader> retrieveAllVillage() {
        return responseService.getListResult(leaderService.retrieveAllLeader());
    }

    @ApiOperation(value = "리더 등록", notes = "리더를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerVillage(@RequestBody LeaderRequest request) {
        int result = leaderService.registerLeader(request);
        return responseService.getSingleResult(result);
    }
}