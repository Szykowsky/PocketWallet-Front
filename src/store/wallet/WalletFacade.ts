import store from "../index";
import { dispatch } from '@/store/utils';
import { WalletActionType } from './WalletActions';
import { AddPasswordModel } from '@/models/AddPasswordModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { SharePasswordModel } from '@/models/SharePasswordModel';
import { WalletMutationType } from './WalletMutations';
import { PasswordWalletFlagModel } from '@/models/PasswordWalletFlagModel';

export const useWalletFacade = () => {
    return {
        addNewPassword(addPasswordModel: AddPasswordModel) {
            dispatch(WalletActionType.ADD_PASSWORD, addPasswordModel);;
        },
        resetMessages() {
            dispatch(WalletActionType.RESET_MESSAGES);
        },
        fetchPasswordWallet() {
            dispatch(WalletActionType.FETCH_PASSWORD_WALLET);
        },
        getOriginalPassword(id: string) {
            dispatch(WalletActionType.GET_ORIGINAL_PASSWORD, id);
        },
        hidePassword(id: string) {
            dispatch(WalletActionType.HIDE_PASSWORD, id);
        },
        deletePassword(id: string) {
            dispatch(WalletActionType.DELETE_PASSWORD, id);
        },
        sharePassword(sharePasswordModel: SharePasswordModel) {
            dispatch(WalletActionType.SHARE_PASSWORD, sharePasswordModel);
        },
        editPassword(editPasswordModel: PasswordWalletModel) {
            dispatch(WalletActionType.EDIT_PASSWORD, editPasswordModel);
        },
        setReadMode(mode: boolean) {
            dispatch(WalletMutationType.SET_READ_MODE, mode);
        },
        resetEditModel() {
            dispatch(WalletMutationType.RESET_EDIT_MODEL);
        },
        fetchFullSecurityPasswordWallet(id: string) {
            dispatch(WalletActionType.FETCH_FULL_PASSWORD, id);
        },
        getErrorMessage(): string | null {
            return store.getters.getWalletErrorMessage;
        },
        getIsLoadingFlag(): boolean {
            return store.getters.getWalletIsLoadingFlag;
        },
        getSuccesMessage(): string | null {
            return store.getters.getWalletSuccesMessage;
        },
        getPasswordWallet(): PasswordWalletFlagModel[] {
            return store.getters.getPasswordWallet;
        },
        getFullSecurityPassword(): PasswordWalletModel {
            return store.getters.getFullSecurityPassword;
        },
        getReadMode(): boolean {
            return store.getters.getReadMode;
        }
    };
};