package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.DeptService;
import sarang.univ.dreamee.service.ResponseService;

@Api(tags = {"3. GBS"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/gbs")
public class GbsController {

    private final DeptService deptService;
    private final ResponseService responseService;

    @ApiOperation(value = "부서 리스트 조회", notes = "모든 부서를 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Dept> retrieveAllDept() {
        return responseService.getListResult(deptService.retrieveAllDept());
    }

    @ApiOperation(value = "부서 등록", notes = "부서를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerDept(@RequestBody DeptRequest request) {
        int result = deptService.registerDept(request);
        return responseService.getSingleResult(result);
    }
}
