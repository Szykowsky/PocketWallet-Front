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
    CHANGE_PASSWORD = "CHANGE_PASSWORD"
}

export const actions = {
    [AuthActionType.SIGN_IN]({ commit }: { commit: Function; }, payload: LoginModel) {
        commit(AuthMutationType.SIGN_IN);
        fetch('https://localhost:44323/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then((response: Status) => {
                console.log({ response });
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
                commit(AuthMutationType.SIGN_IN_FAIL, "Something went wrong, try agin later");
            });
    },
    [AuthActionType.SIGN_UP]({ commit }: { commit: Function; }, payload: RegisterModel) {
        commit(AuthMutationType.SIGN_UP);
        fetch('https://localhost:44323/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then((response: Status) => {
                console.log({ response });
                if (response.success) {
                    commit(AuthMutationType.SIGN_UP_SUCCESS, response.messege);
                    router.push('/');
                } else {
                    commit(AuthMutationType.SIGN_UP_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.SIGN_UP_FAIL, "Something went wrong, try agin later");
            });
    },
    [AuthActionType.CHANGE_PASSWORD]({ commit }: { commit: Function; }, payload: ChangePasswordModel) {
        commit(AuthMutationType.CHANGE_PASSWORD);
        const token = localStorage.getItem("token");
        fetch('https://localhost:44323/api/auth/password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then((response: Status) => {
                if (response.success) {
                    commit(AuthMutationType.CHANGE_PASSWORD_SUCCESS, response.messege);
                } else {
                    commit(AuthMutationType.CHANGE_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(AuthMutationType.SIGN_IN_FAIL, "Something went wrong, try agin later");
            });
    },
    [AuthActionType.RESET_MESSAGES]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.RESET_MESSAGES);
    },
    [AuthActionType.SIGN_OUT]({ commit }: { commit: Function; }) {
        commit(AuthMutationType.SING_OUT);
        localStorage.removeItem("token");
        router.push("/");
    }
};