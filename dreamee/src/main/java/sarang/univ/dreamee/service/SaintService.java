package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

public interface SaintService {
    List<Saint> retrieveAllSaint();
    Saint retrieveSaintByName(String saintName);
    Integer registerSaint(SaintRequest request);
}
