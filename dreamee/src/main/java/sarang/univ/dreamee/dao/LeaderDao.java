package sarang.univ.dreamee.dao;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Leader;
import sarang.univ.dreamee.param.LeaderParam;
import sarang.univ.dreamee.request.LeaderRequest;

import java.util.List;

@Repository
public interface LeaderDao {
    List<Leader> retrieveAllLeader();
    Leader retrieveLeaderBySaintId(Integer saintId);
    Leader retrieveLeader(LeaderParam param);
    int registerLeader(Leader leader);

//    public UserDto retrieveUserById(String user_id);
//    public void createUser(UserDto userDto);
//    public void createAuthority(UserDto user);
//    public void createUserProfile(String user_id);
//    public List<GrantedAuthority> retrieveAuthority(String user_id);
}
