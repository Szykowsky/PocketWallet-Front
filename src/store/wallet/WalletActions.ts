import { useWalletMenager } from '@/api/wallet';
import { AddPasswordModel } from '@/models/AddPasswordModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { Status } from '@/models/Status';
import router from '@/router';
import { WalletMutationType } from './WalletMutations';

export enum WalletActionType {
    ADD_PASSWORD = 'ADD_PASSWORD',
    RESET_MESSAGES = "RESET_MESSAGES",
    FETCH_PASSWORD_WALLET = 'FETCH_PASSWORD_WALLET',
    GET_ORIGINAL_PASSWORD = 'GET_ORIGINAL_PASSWORD',
    HIDE_PASSWORD = "HIDE_PASSWORD"
}

const { addPassword, fetchWallet, getPasswordById } = useWalletMenager();

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
        commit(WalletMutationType.ADD_PASSWORD);
        fetchWallet(String(token))
            .then((response: PasswordWalletModel[]) => {
                commit(WalletMutationType.FETCH_WALLET_PASSWORD_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(WalletMutationType.ADD_PASSWORD_FAIL);
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
};