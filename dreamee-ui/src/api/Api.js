import axios from "axios";

const base_url = "http://localhost:8080/api/v1";

export function getLeader(saintId) {
    const path = base_url + "/leader" + "?saintId=" + saintId;
    return getMethod(path);
}

export function getSaint(saintId) {
    const path = base_url + "/saint" + "?saintId=" + saintId;
    return getMethod(path);
}

function getMethod(url) {
    return axios.get(url);
    // return fetch(url)
}
