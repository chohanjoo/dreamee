package sarang.univ.dreamee.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.request.LeaderRequest;
import sarang.univ.dreamee.request.retrieve.RetrieveLeaderRequest;
import sarang.univ.dreamee.response.type.LeaderInfo;

import java.util.Collection;
import java.util.List;

public interface LeaderService {

    //TODO 리더 조회할 때, authority도 같이 조회 필요
    List<Leader> retrieveAllLeader();
    Leader retrieveLeader(RetrieveLeaderRequest request);
    Integer registerLeader(LeaderRequest request);

    // internal
    LeaderInfo retrieveLeaderInfo(LeaderRequest request);
}
