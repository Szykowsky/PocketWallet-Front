import { AuthState } from './AuthState';

export const getters = {
    getIsLoginFlag(state: AuthState) {
        return state.isLogin;
    },
    getIsLoadingFlag(state: AuthState) {
        return state.isLoading;
    },
    getErrorMessage(state: AuthState) {
        return state.errorMessege;
    },
    getSuccesMessage(state: AuthState) {
        return state.succesMessege;
    },
    getUserInfo(state: AuthState) {
        return state.authInfo;
    }
};