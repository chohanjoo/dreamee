package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Pastor;
import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.PastorRequest;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

public interface PastorService {
    List<Pastor> retrieveAllPastor();
    Pastor retrievePastorByName(String name);
    Integer registerPastor(PastorRequest request);
}
