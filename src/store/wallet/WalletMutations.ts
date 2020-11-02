import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { WalletState } from './WalletState';

export enum WalletMutationType {
    ADD_PASSWORD = 'ADD_PASSWORD',
    ADD_PASSWORD_SUCCESS = 'ADD_PASSWORD_SUCCESS',
    ADD_PASSWORD_FAIL = 'ADD_PASSWORD_FAIL',
    RESET_MESSAGES = 'RESET_MESSAGES',
    FETCH_WALLET_PASSWORD = 'FETCH_WALLET_PASSWORD',
    FETCH_WALLET_PASSWORD_SUCCESS = 'FETCH_WALLET_PASSWORD_SUCCESS',
    FETCH_WALLET_PASSWORD_FAIL = 'FETCH_WALLET_PASSWORD_FAIL',
    SHOW_PASSWORD = 'SHOWPASSWORD',
    SHOW_PASSWORD_SUCCESS = 'SHOW_PASSWORD_SUCCESS',
    SHOW_PASSWORD_FAIL = 'SHOW_PASSWORD_FAIL',
    HIDE_PASSWORD = "HIDE_PASSWORD"
}

export const mutations = {
    [WalletMutationType.ADD_PASSWORD](state: WalletState) {
        state.isLoading = true;
        return state;
    },
    [WalletMutationType.ADD_PASSWORD_SUCCESS](state: WalletState, payload: string) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.succesMessege = payload;
        return state;
    },
    [WalletMutationType.ADD_PASSWORD_FAIL](state: WalletState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        return state;
    },
    [WalletMutationType.RESET_MESSAGES](state: WalletState) {
        state.errorMessege = null;
        state.succesMessege = null;
        return state;
    },
    [WalletMutationType.FETCH_WALLET_PASSWORD](state: WalletState) {
        state.isLoading = true;
        return state;
    },
    [WalletMutationType.FETCH_WALLET_PASSWORD_SUCCESS](state: WalletState, payload: PasswordWalletModel[]) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.passwordWallet = payload;
        return state;
    },
    [WalletMutationType.FETCH_WALLET_PASSWORD_FAIL](state: WalletState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        state.passwordWallet = [];
        return state;
    },
    [WalletMutationType.SHOW_PASSWORD](state: WalletState) {
        state.isPasswordLoading = true;
        return state;
    },
    [WalletMutationType.SHOW_PASSWORD_SUCCESS](state: WalletState, payload: { id: string, password: string; }) {
        state.isPasswordLoading = false;
        state.isError = false;
        state.errorMessege = null;
        const foundIndex = state.passwordWallet.findIndex(x => x.id == payload.id);
        state.passwordWallet[foundIndex].password = payload.password;
        return state;
    },
    [WalletMutationType.SHOW_PASSWORD_FAIL](state: WalletState, payload: string) {
        state.isPasswordLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        return state;
    },
    [WalletMutationType.HIDE_PASSWORD](state: WalletState, payload: string) {
        const foundIndex = state.passwordWallet.findIndex(x => x.id == payload);
        state.passwordWallet[foundIndex].password = null;
        return state;
    },
};