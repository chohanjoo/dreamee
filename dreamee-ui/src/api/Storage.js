export const login = (token, user_id) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('USER', user_id);
};

export const getToken = () => {
    try {
        return sessionStorage.getItem('token')
    } catch (e) {
        //이거 토큰없으므로 처리 해 주기
        return null
    }
};