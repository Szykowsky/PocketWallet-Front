import store from "../index";
import { dispatch } from '@/store/utils';
import { WalletActionType } from './WalletActions';
import { AddPasswordModel } from '@/models/AddPasswordModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';

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
        getErrorMessage(): string | null {
            return store.getters.getWalletErrorMessage;
        },
        getIsLoadingFlag(): boolean {
            return store.getters.getWalletIsLoadingFlag;
        },
        getSuccesMessage(): string | null {
            return store.getters.getWalletSuccesMessage;
        },
        getPasswordWallet(): PasswordWalletModel[] {
            return store.getters.getPasswordWallet;
        }
    };
};