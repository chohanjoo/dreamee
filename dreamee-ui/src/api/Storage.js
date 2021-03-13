export const login = (token, user_id) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('USER', user_id);
    sessionStorage.setItem('SAINT', user_id);
};

export const getUser = () => {
    const user = sessionStorage.getItem('USER');
    try {
        return user
    } catch (e) {
        return null
    }
};

export const setSaint = (saintName) => {
    sessionStorage.setItem('SAINT', saintName);
};

export const getSaintNameInStorage = () => {
    const saint = sessionStorage.getItem('SAINT');
    try {
        return saint
    } catch (e) {
        return null
    }
};


export const logout = () => {
    sessionStorage.removeItem('USER');
    sessionStorage.removeItem('SAINT')
    sessionStorage.removeItem('token');
};

export const getToken = () => {
    try {
        return sessionStorage.getItem('token')
    } catch (e) {
        //이거 토큰없으므로 처리 해 주기
        return null
    }
};
