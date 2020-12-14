package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.PastorRequest;
import sarang.univ.dreamee.request.SaintRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.PastorService;
import sarang.univ.dreamee.service.ResponseService;
import sarang.univ.dreamee.service.SaintService;

@Api(tags = {"1. Saint"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/pastor")
public class PastorController {

    private final PastorService pastorService;
    private final ResponseService responseService;

    @ApiOperation(value = "성도 리스트 조회", notes = "모든 회원을 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Pastor> findAllPastor() {
        return responseService.getListResult(pastorService.retrieveAllPastor());
    }

    @ApiOperation(value = "성도 등록", notes = "모든 회원을 조회한다")
    @PostMapping
    public SingleResult<Integer> findAllUser(@RequestBody PastorRequest request) {
        int result = pastorService.registerPastor(request);
        return responseService.getSingleResult(result);
    }
}
