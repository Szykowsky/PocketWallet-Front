import { PasswordOperation } from '@/models/PasswordOperation';
import { PasswordOperationState } from './PasswordOperationsState';

export enum PasswordOperationMutationType {
    RESET_MESSAGES = 'RESET_MESSAGES',
    FETCH_OPERATIONS = 'FETCH_OPERATIONS',
    FETCH_OPERATIONS_SUCCESS = 'FETCH_OPERATIONS_SUCCESS',
    FETCH_OPERATIONS_FAIL = 'FETCH_OPERATIONS_FAIL',
    RESTORE_PASSWORD = 'RESTORE_PASSWORD',
    RESTORE_PASSWORD_SUCCESS = 'RESTORE_PASSWORD_SUCCESS',
    RESTORE_PASSWORD_FAIL = 'RESTORE_PASSWORD_FAIL',
}

export const mutations = {
    [PasswordOperationMutationType.RESET_MESSAGES](state: PasswordOperationState) {
        state.errorMessege = null;
        state.succesMessege = null;
        return state;
    },
    [PasswordOperationMutationType.FETCH_OPERATIONS](state: PasswordOperationState) {
        state.isLoading = true;
        return state;
    },
    [PasswordOperationMutationType.FETCH_OPERATIONS_SUCCESS](state: PasswordOperationState, payload: PasswordOperation[]) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.operations = payload;
        return state;
    },
    [PasswordOperationMutationType.FETCH_OPERATIONS_FAIL](state: PasswordOperationState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        state.operations = [];
        return state;
    },
    [PasswordOperationMutationType.RESTORE_PASSWORD](state: PasswordOperationState) {
        return state;
    },
    [PasswordOperationMutationType.RESTORE_PASSWORD_SUCCESS](state: PasswordOperationState, payload: string) {
        state.isError = false;
        state.succesMessege = payload;
        return state;
    },
    [PasswordOperationMutationType.RESTORE_PASSWORD_FAIL](state: PasswordOperationState, payload: string) {
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        state.operations = [];
        return state;
    },
};