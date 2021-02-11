package sarang.univ.dreamee.dao;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Repository;
import sarang.univ.dreamee.dto.Authority;
import sarang.univ.dreamee.dto.Leader;

import java.util.List;

@Repository
public interface AuthorityDao {
    public void createAuthority(Leader leader);
    public List<GrantedAuthority> retrieveAuthority(Integer leaderId);
}
