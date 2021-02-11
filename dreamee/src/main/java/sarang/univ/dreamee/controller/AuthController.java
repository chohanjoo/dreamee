package sarang.univ.dreamee.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sarang.univ.dreamee.conf.JwtTokenProvider;
import sarang.univ.dreamee.request.AuthenticationRequest;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.response.CommonResult;
import sarang.univ.dreamee.response.SingleResult;
import sarang.univ.dreamee.response.type.SignInResult;
import sarang.univ.dreamee.service.AuthService;
import sarang.univ.dreamee.service.LeaderService;
import sarang.univ.dreamee.service.ResponseService;

@Slf4j
@Api(tags = {"0. Auth"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

    private final LeaderService leaderService;
    private final AuthService authService;
    private final ResponseService responseService;

    private final JwtTokenProvider jwtTokenProvider;

    @ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
    @PostMapping(value = "/signin")
    public SingleResult<String> signIn(@RequestBody AuthenticationRequest request) throws Exception {
        log.debug("AuthController.signIn");

        SignInResult result = authService.signIn(request);

        String token = jwtTokenProvider.createToken(
                result.getName(),
                result.getAuthorities()
        );

        return responseService.getSingleResult(token);
    }

    //TODO 리더 및 교역자 모두 가입 api
    @ApiOperation(value = "가입", notes = "회원가입을 한다.")
    @PostMapping(value = "/signup")
    public CommonResult signUp(@RequestBody LeaderRequest request) {
        log.debug("AuthController.signUp");

        leaderService.registerLeader(request);

        return responseService.getSuccessResult();
    }
}
