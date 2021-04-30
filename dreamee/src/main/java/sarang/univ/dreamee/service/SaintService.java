package sarang.univ.dreamee.service;

import sarang.univ.dreamee.dto.Saint;
import sarang.univ.dreamee.param.SaintParam;
import sarang.univ.dreamee.request.retrieve.RetrieveSaintRequest;
import sarang.univ.dreamee.request.SaintRequest;

import java.util.List;

public interface SaintService {
    List<Saint> retrieveSaintDetail(RetrieveSaintRequest request);
    Saint retrieveSaint(RetrieveSaintRequest request);
    Integer registerSaint(SaintRequest request);
}
