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

@Api(tags = {"1. Saint"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/dept")
public class DeptController {

    private final DeptService deptService;
    private final ResponseService responseService;

    @ApiOperation(value = "성도 리스트 조회", notes = "모든 회원을 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Dept> findAllDept() {
        return responseService.getListResult(deptService.retrieveAllDept());
    }

    @ApiOperation(value = "성도 등록", notes = "모든 회원을 조회한다")
    @PostMapping
    public SingleResult<Integer> findAllUser(@RequestBody DeptRequest request) {
        int result = deptService.registerDept(request);
        return responseService.getSingleResult(result);
    }
}
