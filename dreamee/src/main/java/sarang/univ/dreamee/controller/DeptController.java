package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sarang.univ.dreamee.dto.Dept;
import sarang.univ.dreamee.request.DeptRequest;
import sarang.univ.dreamee.response.ListResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.service.DeptService;
import sarang.univ.dreamee.service.ResponseService;

import java.util.Map;

@Api(tags = {"3. Department"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/dept")
public class DeptController {

    private final DeptService deptService;
    private final ResponseService responseService;

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "부서 리스트 조회", notes = "모든 부서를 조회한다")
    @GetMapping(value = "/all")
    public ListResult<Dept> retrieveAllDept() {
        return responseService.getListResult(deptService.retrieveAllDept());
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "부서 조회", notes = "부서를 조회한다")
    @GetMapping(value = "")
    public SingleResult<Dept> retrieveDept(@RequestParam Integer deptId) {
        return responseService.getSingleResult(deptService.retrieveDeptByDeptId(deptId));
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "부서 등록", notes = "부서를 등록한다")
    @PostMapping
    public SingleResult<Integer> registerDept(@RequestBody DeptRequest request) {
        int result = deptService.registerDept(request);
        return responseService.getSingleResult(result);
    }

    @ApiImplicitParams({ @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
    @ApiOperation(value = "부서 Type 반환", notes = "부서 Type 반환")
    @GetMapping(value = "/getDeptTypeList")
    public SingleResult<Map<String, String>> getDeptTypeList() {
        Map<String, String> deptTypeList = deptService.getDeptTypeList();
        return responseService.getSingleResult(deptTypeList);
    }
}
