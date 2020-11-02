import { AuthState } from './AuthState';

export enum AuthMutationType {
    SIGN_IN = 'SIGN_IN',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAIL = 'SIGN_IN_FAIL',
    SIGN_UP = 'SIGN_UP',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAIL = 'SIGN_UP_FAIL',
    RESET_MESSAGES = "RESET_MESSAGES",
    SING_OUT = "SIGN_OUT",
    CHANGE_PASSWORD = 'CHANGE_PASSWORD',
    CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL',
}

export const mutations = {
    [AuthMutationType.SIGN_IN](state: AuthState) {
        state.isLoading = true;
        return state;
    },
    [AuthMutationType.SIGN_IN_SUCCESS](state: AuthState) {
        state.isLoading = false;
        state.isLogin = true;
        state.isError = false;
        state.errorMessege = null;
        state.succesMessege = "Succesfully sign in!";
        return state;
    },
    [AuthMutationType.SIGN_IN_FAIL](state: AuthState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        return state;
    },
    [AuthMutationType.SIGN_UP](state: AuthState) {
        state.isLoading = true;
        return state;
    },
    [AuthMutationType.SIGN_UP_SUCCESS](state: AuthState, payload: string) {
        state.isLoading = false;
        state.isLogin = true;
        state.isError = false;
        state.errorMessege = null;
        state.succesMessege = payload;
        return state;
    },
    [AuthMutationType.SIGN_UP_FAIL](state: AuthState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        return state;
    },
    [AuthMutationType.RESET_MESSAGES](state: AuthState,) {
        state.errorMessege = null;
        state.succesMessege = null;
        return state;
    },
    [AuthMutationType.SING_OUT](state: AuthState,) {
        state.isLogin = false;
        return state;
    },
    [AuthMutationType.CHANGE_PASSWORD](state: AuthState) {
        state.isLoading = true;
        return state;
    },
    [AuthMutationType.CHANGE_PASSWORD_SUCCESS](state: AuthState, payload: string) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.succesMessege = payload;
        return state;
    },
    [AuthMutationType.CHANGE_PASSWORD_FAIL](state: AuthState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        return state;
    },
};