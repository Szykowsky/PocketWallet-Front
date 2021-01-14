import store from "../index";
import { dispatch } from '@/store/utils';
import { PasswordOperationsActionType } from './PasswordOperationsActions';
import { PasswordOperation } from "@/models/PasswordOperation";

export const usePasswordOperationFacade = () => {
    return {
        resetMessages() {
            dispatch(PasswordOperationsActionType.RESET_MESSAGES);
        },
        fetchPasswordOperation(id: string) {
            dispatch(PasswordOperationsActionType.FETCH_OPERATIONS, id);
        },
        restorePassword(id: string, passwordId: string) {
            dispatch(PasswordOperationsActionType.RESTORE_PASSWORD, { id, passwordId });
        },
        getIsLoadingFlag(): boolean {
            return store.getters.getPasswordOperationIsLoadingFlag;
        },
        getSuccesMessage(): string | null {
            return store.getters.getPasswordOperationSuccesMessage;
        },
        getPasswordOperations(): PasswordOperation[] {
            return store.getters.getPasswordOperations;
        },
    };
};