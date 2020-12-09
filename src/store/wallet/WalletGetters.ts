import { PasswordWalletFlagModel } from '@/models/PasswordWalletFlagModel';
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
    getPasswordWallet(state: WalletState): PasswordWalletFlagModel[] {
        return state.passwordWallet;
    },
    getFullSecurityPassword(state: WalletState): PasswordWalletModel | null {
        return state.passwordToEdit;
    },
    getReadMode(state: WalletState): boolean {
        return state.isReadMode;
    }
};