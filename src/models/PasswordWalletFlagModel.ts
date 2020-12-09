import { PasswordWalletModel } from './PasswordWalletModel';

export interface PasswordWalletFlagModel extends PasswordWalletModel {
    canEdit: boolean;
    canDelete: boolean;
    canShare: boolean;
}