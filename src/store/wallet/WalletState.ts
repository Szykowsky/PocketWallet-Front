import { PasswordWalletModel } from '@/models/PasswordWalletModel';

export interface WalletState {
    passwordWallet: PasswordWalletModel[];
    isLoading: boolean,
    isPasswordLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
}

export const walletInitialState: WalletState = {
    passwordWallet: [],
    isError: false,
    isLoading: false,
    isPasswordLoading: false,
    errorMessege: null,
    succesMessege: null
};
