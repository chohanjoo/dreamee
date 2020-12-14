package sarang.univ.dreamee.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sarang.univ.dreamee.dao.PastorDao;
import sarang.univ.dreamee.dao.SaintDao;
import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.PastorRequest;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PastorServiceImpl implements PastorService{
    private final PastorDao pastorDao;

    @Override
    public List<Pastor> retrieveAllPastor() {
        return pastorDao.retrieveAllPastor();
    }

    @Override
    public Pastor retrievePastorByName(String pastorName) {
        return pastorDao.retrievePastorByName(pastorName);
    }

    @Override
    public Integer registerPastor(PastorRequest request) {
        int result = pastorDao.registerPastor(request.getName());
        return result;
    }
}
