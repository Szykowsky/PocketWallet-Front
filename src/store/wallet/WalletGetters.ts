import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { WalletState } from './WalletState';

export const getters = {
    getWalletIsLoadingFlag(state: WalletState): boolean {
        return state.isLoading;
    },
    getWalletErrorMessage(state: WalletState): string | null {
        return state.errorMessege;
    },
    getWalletSuccesMessage(state: WalletState): string | null {
        return state.succesMessege;
    },
    getPasswordWallet(state: WalletState): PasswordWalletModel[] {
        return state.passwordWallet;
    }
};