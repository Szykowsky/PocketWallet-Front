import { useWalletMenager } from '@/api/wallet';
import { AddPasswordModel } from '@/models/AddPasswordModel';
import { PasswordWalletFlagModel } from '@/models/PasswordWalletFlagModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { SharePasswordModel } from '@/models/SharePasswordModel';
import { Status } from '@/models/Status';
import router from '@/router';
import { WalletMutationType } from './WalletMutations';

export enum WalletActionType {
    ADD_PASSWORD = 'ADD_PASSWORD',
    RESET_MESSAGES = "RESET_MESSAGES",
    FETCH_PASSWORD_WALLET = 'FETCH_PASSWORD_WALLET',
    GET_ORIGINAL_PASSWORD = 'GET_ORIGINAL_PASSWORD',
    HIDE_PASSWORD = "HIDE_PASSWORD",
    DELETE_PASSWORD = "DELETE_PASSWORD",
    SHARE_PASSWORD = "SHARE_PASSWORD",
    SET_READ_MODE = "SET_READ_MODE",
    FETCH_FULL_PASSWORD = "FETCH_FULL_PASSWORD",
    EDIT_PASSWORD = "EDIT_PASSWORD",
    RESET_EDIT_MODEL = "RESET_EDIT_MODEL"
}

const {
    addPassword,
    fetchWallet,
    getPasswordById,
    deletePassword,
    sharePassword,
    getFullSecurityPasswordById,
    editPassword } = useWalletMenager();

export const actions = {
    [WalletActionType.ADD_PASSWORD]({ commit }: { commit: Function; }, payload: AddPasswordModel) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.ADD_PASSWORD);
        addPassword(payload, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(WalletMutationType.ADD_PASSWORD_SUCCESS, response.messege);
                    router.push('/main');
                } else {
                    commit(WalletMutationType.ADD_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.ADD_PASSWORD_FAIL);
            });
    },
    [WalletActionType.RESET_MESSAGES]({ commit }: { commit: Function; }) {
        commit(WalletMutationType.RESET_MESSAGES);
    },
    [WalletActionType.FETCH_PASSWORD_WALLET]({ commit }: { commit: Function; }) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.FETCH_WALLET_PASSWORD);
        fetchWallet(String(token))
            .then((response: PasswordWalletFlagModel[]) => {
                commit(WalletMutationType.FETCH_WALLET_PASSWORD_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.FETCH_WALLET_PASSWORD_FAIL);
            });
    },
    [WalletActionType.GET_ORIGINAL_PASSWORD]({ commit }: { commit: Function; }, id: string) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.SHOW_PASSWORD);
        getPasswordById(id, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(WalletMutationType.SHOW_PASSWORD_SUCCESS, { id, password: response.messege });
                } else {
                    commit(WalletMutationType.SHOW_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.SHOW_PASSWORD_FAIL, "Something went wrong, try again later");
            });
    },
    [WalletActionType.HIDE_PASSWORD]({ commit }: { commit: Function; }, id: string) {
        commit(WalletMutationType.HIDE_PASSWORD, id);
    },
    [WalletActionType.DELETE_PASSWORD]({ commit }: { commit: Function; }, id: string) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.DELETE_PASSWORD);
        deletePassword(id, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(WalletMutationType.DELETE_PASSWORD_SUCCESS, { id, message: response.messege });
                } else {
                    commit(WalletMutationType.DELETE_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.DELETE_PASSWORD_FAIL, "Something went wrong, try again later");
            });
    },
    [WalletActionType.SHARE_PASSWORD]({ commit }: { commit: Function; }, sharePasswordModel: SharePasswordModel) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.DELETE_PASSWORD);
        sharePassword(sharePasswordModel, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(WalletMutationType.SHARE_PASSWORD_SUCCESS, { message: response.messege });
                } else {
                    commit(WalletMutationType.SHARE_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.SHARE_PASSWORD_FAIL, "Something went wrong, try again later");
            });
    },
    [WalletActionType.SET_READ_MODE]({ commit }: { commit: Function; }, mode: boolean) {
        commit(WalletMutationType.SET_READ_MODE, mode);
    },
    [WalletActionType.FETCH_FULL_PASSWORD]({ commit }: { commit: Function; }, payload: string) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.FETCH_FULL_PASSWORD);
        getFullSecurityPasswordById(payload, String(token))
            .then((response: PasswordWalletModel) => {
                commit(WalletMutationType.FETCH_FULL_PASSWORD_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.FETCH_FULL_PASSWORD_FAIL);
            });
    },
    [WalletActionType.EDIT_PASSWORD]({ commit }: { commit: Function; }, passwordModel: PasswordWalletModel) {
        const token = localStorage.getItem("token");
        commit(WalletMutationType.EDIT_PASSWORD);
        editPassword(passwordModel, String(token))
            .then((response: Status) => {
                commit(WalletMutationType.EDIT_PASSWORD_SUCCESS, response.messege);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.EDIT_PASSWORD_FAIL);
            });
    },
    [WalletActionType.RESET_EDIT_MODEL]({ commit }: { commit: Function; }) {
        commit(WalletMutationType.RESET_EDIT_MODEL);
    },
};