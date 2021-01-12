
import { PasswordOperation } from '@/models/PasswordOperation';
import { PasswordOperationState } from './PasswordOperationsState';

export const getters = {
    getPasswordOperationIsLoadingFlag(state: PasswordOperationState): boolean {
        return state.isLoading;
    },
    getPasswordOperationErrorMessage(state: PasswordOperationState): string | null {
        return state.errorMessege;
    },
    getPasswordOperationSuccesMessage(state: PasswordOperationState): string | null {
        return state.succesMessege;
    },
    getPasswordOperations(state: PasswordOperationState): PasswordOperation[] {
        return state.operations;
    },
};