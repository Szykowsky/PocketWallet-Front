import { useOperationsMenager } from '@/api/operation';
import { PasswordOperation } from '@/models/PasswordOperation';
import { PasswordOperationMutationType } from './PasswordOperationsMutations';

export enum PasswordOperationsActionType {
    RESET_MESSAGES = "RESET_MESSAGES",
    FETCH_OPERATIONS = 'FETCH_OPERATIONS',
}

const {
    fetchOperations
} = useOperationsMenager();

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
};