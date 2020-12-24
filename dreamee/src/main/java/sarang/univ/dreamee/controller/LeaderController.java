package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.DeptService;
import sarang.univ.dreamee.service.LeaderService;
import sarang.univ.dreamee.service.ResponseService;

@Api(tags = {"4. Leader"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/leader")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LeaderController {

    private final LeaderService leaderService;
    private final ResponseService responseService;

    @ApiOperation(value = "리더 리스트 조회", notes = "모든 리더를 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Leader> retrieveAllLeader() {
        return responseService.getListResult(leaderService.retrieveAllLeader());
    }

    @ApiOperation(value = "리더 조회", notes = "리더를 조회한다")
    @GetMapping(value = "")
    public SingleResult<Leader> retrieveAllLeader(@RequestParam int saintId) {
        return responseService.getSingleResult(leaderService.retrieveLeaderBySaintId(saintId));
    }

    @ApiOperation(value = "리더 등록", notes = "리더를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerLeader(@RequestBody LeaderRequest request) {
        int result = leaderService.registerLeader(request);
        return responseService.getSingleResult(result);
    }
}
