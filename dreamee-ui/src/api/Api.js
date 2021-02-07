import axios from "axios";

const base_url = "http://localhost:8080/api/v1";


export function getSaintAttList(body) {
    const path = base_url + "/attendance/saint"
    return postMethod(path, body);
}

export function getGbsLeaderList(gbsMember) {
    const path = base_url + "/gbs/leaders"
    return postMethod(path, gbsMember);
}

export function getLeader(saintId) {
    const path = base_url + "/leader" + "?saintId=" + saintId;
    return getMethod(path);
}

export function getSaint(saintId) {
    const path = base_url + "/saint" + "?saintId=" + saintId;
    return getMethod(path);
}

export function getDept(deptId) {
    const path = base_url + "/dept" + "?deptId=" + deptId;
    return getMethod(path);
}

export function getGbs(leaderName) {
    const path = base_url + "/gbs" + "?leaderName=" + leaderName;
    return getMethod(path);
}

export function getGbsMemberList(leaderName) {
    const path = base_url + "/gbs/members" + "?leaderName=" + leaderName;
    return getMethod(path);
}

export function postGbsAtt(saintName, body) {
    const path = base_url + "/attendance/" + saintName;

    return postMethod(path, body);
}

export function getAttListByGbs(leaderId, activeTerm) {
    const path = base_url + "/attendance/" + leaderId + "/" + activeTerm;
    return getMethod(path);
}

export function getVillageById(villageId) {
    const path = base_url + "/village" + "?villageId="+ villageId;
    return getMethod(path);
}

function getMethod(url) {
    return axios.get(url);
    // return fetch(url)
}

function postMethod(url, body) {
    return axios.post(url, body);
    // return fetch(url)
}
