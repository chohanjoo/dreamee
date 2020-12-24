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

@Api(tags = {"2. Pastor"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/pastor")
public class PastorController {

    private final PastorService pastorService;
    private final ResponseService responseService;

    @ApiOperation(value = "교역자 리스트 조회", notes = "모든 교역자를 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Pastor> retrieveAllPastor() {
        return responseService.getListResult(pastorService.retrieveAllPastor());
    }

    @ApiOperation(value = "교역자 등록", notes = "교역자를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerPastor(@RequestBody PastorRequest request) {
        int result = pastorService.registerPastor(request);
        return responseService.getSingleResult(result);
    }
}
