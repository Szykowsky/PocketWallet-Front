import { useOperationsMenager } from '@/api/operation';
import { PasswordOperation } from '@/models/PasswordOperation';
import { Status } from '@/models/Status';
import { usePasswordOperationFacade } from './PasswordOperationsFacade';
import { PasswordOperationMutationType } from './PasswordOperationsMutations';

export enum PasswordOperationsActionType {
    RESET_MESSAGES = "RESET_MESSAGES",
    FETCH_OPERATIONS = 'FETCH_OPERATIONS',
    RESTORE_PASSWORD = 'RESTORE_PASSWORD'
}

const {
    fetchOperations,
    restorePassword
} = useOperationsMenager();

const { fetchPasswordOperation } = usePasswordOperationFacade();

export const actions = {
    [PasswordOperationsActionType.RESET_MESSAGES]({ commit }: { commit: Function; }) {
        commit(PasswordOperationMutationType.RESET_MESSAGES);
    },
    [PasswordOperationsActionType.FETCH_OPERATIONS]({ commit }: { commit: Function; }, payload: string) {
        const token = localStorage.getItem("token");
        commit(PasswordOperationMutationType.FETCH_OPERATIONS);
        fetchOperations(payload, String(token))
            .then((response: PasswordOperation[]) => {
                commit(PasswordOperationMutationType.FETCH_OPERATIONS_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(PasswordOperationMutationType.FETCH_OPERATIONS_FAIL);
            });
    },

    [PasswordOperationsActionType.RESTORE_PASSWORD]({ commit }: { commit: Function; }, payload: { id: string, passwordId: string; }) {
        const token = localStorage.getItem("token");
        commit(PasswordOperationMutationType.RESTORE_PASSWORD);
        restorePassword(payload.id, String(token))
            .then((response: Status) => {
                if (response.success) {
                    commit(PasswordOperationMutationType.RESTORE_PASSWORD_SUCCESS, response.messege);
                    fetchPasswordOperation(payload.passwordId);
                } else {
                    commit(PasswordOperationMutationType.RESTORE_PASSWORD_FAIL, response.messege);
                }
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(PasswordOperationMutationType.FETCH_OPERATIONS_FAIL);
            });
    },
};