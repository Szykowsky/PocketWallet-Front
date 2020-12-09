import { PasswordWalletFlagModel } from '@/models/PasswordWalletFlagModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';

export interface WalletState {
    passwordWallet: PasswordWalletFlagModel[];
    passwordToEdit: PasswordWalletModel | null;
    isLoading: boolean,
    isPasswordLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
    isReadMode: boolean;
}

export const walletInitialState: WalletState = {
    passwordWallet: [],
    passwordToEdit: null,
    isError: false,
    isLoading: false,
    isPasswordLoading: false,
    errorMessege: null,
    succesMessege: null,
    isReadMode: true
};
