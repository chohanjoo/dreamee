import axios from "axios";
import {getToken} from "./Storage";


const base_url = "http://localhost:8080/api/v1";

const postHeader = {
    'X-AUTH-TOKEN': getToken(),
    'Content-Type': 'application/json'
};

const getHeader = {
    'X-AUTH-TOKEN': getToken()
};


export function getSaintSearchData() {
    const body = {
        saintId: null,
        saintName: null
    };

    const path = base_url + "/saint/retrieveAllSaintDetail";

    return postMethod(path, body, postHeader);
}

export function signUp(id, pw, level) {
    const body = {
        saintName: id,
        password: pw,
        role: level
    }

    const path = base_url + "/auth/signup"

    return postMethod(path, body, postHeader);
}

export function signIn(id, pw) {
    const body = {
        username: id,
        password: pw
    };
    
    const path = base_url + "/auth/signin"

    return postMethod(path, body, postHeader);
}

export function getSaintAttList(body) {
    const path = base_url + "/attendance/saint"
    return postMethod(path, body, postHeader);
}

export function getGbsLeaderList(gbsMember) {
    const path = base_url + "/gbs/leaders"
    return postMethod(path, gbsMember, postHeader);
}

export function getLeader(saintName) {
    const path = base_url + "/leader/retrieveLeader";

    const body = {
        saintName: saintName
    }

    return postMethod(path, body, postHeader);
    // const path = base_url + "/leader" + "?saintId=" + saintId;
    // return getMethod(path, getHeader);
}

export function getSaint(saintId, saintName) {
    const path = base_url + "/saint/retrieveSaint";

    const body = {
        saintName: saintName,
        saintId: saintId
    }

    return postMethod(path, body, postHeader);
    // const path = base_url + "/saint" + "?saintId=" + saintId;
    // return getMethod(path, getHeader);
}

export function getDept(deptId) {
    const path = base_url + "/dept" + "?deptId=" + deptId;
    return getMethod(path, getHeader);
}

export function getGbs(leaderName) {
    const path = base_url + "/gbs" + "?leaderName=" + leaderName;
    return getMethod(path, getHeader);
}

export function getGbsMemberList(leaderName) {
    const path = base_url + "/gbs/members";

    const body = {
        leaderName: leaderName
    }

    return postMethod(path, body, postHeader);
    // const path = base_url + "/gbs/members" + "?leaderName=" + leaderName;
    // return getMethod(path, getHeader);
}

export function postGbsAtt(saintName, body) {
    const path = base_url + "/attendance/" + saintName;

    return postMethod(path, body, postHeader);
}

export function getAttListByGbs(leaderId, activeTerm) {
    const path = base_url + "/attendance/" + leaderId + "/" + activeTerm;
    return getMethod(path, getHeader);
}

export function getVillageById(villageId) {
    const path = base_url + "/village" + "?villageId="+ villageId;
    return getMethod(path, getHeader);
}

function getMethod(url, header) {
    const headers = {
        headers: header
    }

    return axios.get(url, headers);
    // return fetch(url)
}

function postMethod(url, body, header) {
    const headers = {
        headers: header
    }

    return axios.post(url, body, headers);
    // return fetch(url)
}
