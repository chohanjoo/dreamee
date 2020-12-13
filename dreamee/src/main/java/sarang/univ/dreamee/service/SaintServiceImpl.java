package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SaintServiceImpl implements SaintService{
    private final SaintDao saintDao;

    @Override
    public List<Saint> retrieveAllSaint() {
        return saintDao.retrieveAllSaint();
    }

    @Override
    public Integer registerSaint(SaintRequest request) {
        return null;
    }
}
