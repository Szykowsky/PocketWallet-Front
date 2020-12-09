import { useAuthMenager } from '@/api/auth';
import { Authinfo } from '@/models/AuthInfo';
import { ChangePasswordModel } from '@/models/ChangePasswordModel';
import { LoginModel } from '@/models/LoginModel';
import { RegisterModel } from '@/models/RegisterModel';
import { Status } from '@/models/Status';
import router from '@/router';
import { AuthMutationType } from './AuthMutations';

export enum AuthActionType {
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    RESET_MESSAGES = "RESET_MESSAGES",
    SIGN_OUT = 'SIGN_OUT',
    CHANGE_PASSWORD = "CHANGE_PASSWORD",
    FETCH_USER_INFO = 'FETCH_USER_INFO',
    UNBAN_IP_ADDRESS = 'UNBAN_IP_ADDRESS'
}

const { signIn, signUp, changePassword, fetchUserInfo, unbanIpAddress } = useAuthMenager();

export const actions = {
    [AuthActionType.SIGN_IN]({ commit }: { commit: Function; }, payload: LoginModel) {
        commit(AuthMutationType.SIGN_IN);
        signIn(payload)
            .then((response: Status) => {
                if (response.success) {
                    commit(AuthMutationType.SIGN_IN_SUCCESS);
                    localStorage.setItem("token", response.messege);
                    router.push('/main');
                } else {
                    commit(AuthMutationType.SIGN_IN_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.SIGN_IN_FAIL, "Something went wrong, try again later");
            });
    },
    [AuthActionType.SIGN_UP]({ commit }: { commit: Function; }, payload: RegisterModel) {
        commit(AuthMutationType.SIGN_UP);
        signUp(payload)
            .then((response: Status) => {
                if (response.success) {
                    commit(AuthMutationType.SIGN_UP_SUCCESS, response.messege);
                    router.push('/');
                } else {
                    commit(AuthMutationType.SIGN_UP_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.SIGN_UP_FAIL, "Something went wrong, try again later");
            });
    },
    [AuthActionType.CHANGE_PASSWORD]({ commit }: { commit: Function; }, payload: ChangePasswordModel) {
        commit(AuthMutationType.CHANGE_PASSWORD);
        const token = localStorage.getItem("token");
        changePassword(payload, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(AuthMutationType.CHANGE_PASSWORD_SUCCESS, response.messege);
                } else {
                    commit(AuthMutationType.CHANGE_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.CHANGE_PASSWORD_FAIL, "Something went wrong, try again later");
            });
    },
    [AuthActionType.RESET_MESSAGES]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.RESET_MESSAGES);
    },
    [AuthActionType.SIGN_OUT]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.SING_OUT);
        localStorage.removeItem("token");
        router.push("/");
    },
    [AuthActionType.FETCH_USER_INFO]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.GET_AUTH_INFO);
        const token = localStorage.getItem("token");
        fetchUserInfo(String(token))
            .then((response: Authinfo) => {
                commit(AuthMutationType.GET_AUTH_INFO_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.GET_AUTH_INFO_FAIL, "Something went wrong, try again later");
            });
    },
    [AuthActionType.UNBAN_IP_ADDRESS]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.UNBAN_IP_ADDRESS);
        const token = localStorage.getItem("token");
        unbanIpAddress(String(token))
            .then((response: Status) => {
                if (response.success) {
                    router.push('/');
                    commit(AuthMutationType.UNBAN_IP_ADDRESS_SUCCESS, response.messege);
                } else {
                    commit(AuthMutationType.UNBAN_IP_ADDRESS_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.UNBAN_IP_ADDRESS_FAIL, "Something went wrong, try again later");
            });
    },
};