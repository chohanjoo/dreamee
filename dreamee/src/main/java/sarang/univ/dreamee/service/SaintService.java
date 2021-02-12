package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

public interface SaintService {
    List<Saint> retrieveAllSaint();
    Saint retrieveSaintByName(String saintName);
    Saint retrieveSaintById(Integer saintId);
    Saint retrieveSaint(RetrieveSaintRequest request);
    Integer registerSaint(SaintRequest request);
}
