import { useLogsMenager } from '@/api/log';
import { Functions } from '@/models/Functions';
import { Log } from '@/models/Log';
import { LogsMutationType } from './LogsMutations';

export enum LogsActionType {
    RESET_MESSAGES = "RESET_MESSAGES",
    FETCH_LOGS = 'FETCH_LOGS',
    FETCH_FUNCTIONS = 'FETCH_FUNCTIONS',
    SET_SELECTED_FUNCTION = 'SET_SELECTED_FUNCTION'
}

const {
    fetchLogs,
    fetchFunctions
} = useLogsMenager();

export const actions = {
    [LogsActionType.RESET_MESSAGES]({ commit }: { commit: Function; }) {
        commit(LogsMutationType.RESET_MESSAGES);
    },
    [LogsActionType.FETCH_LOGS]({ commit }: { commit: Function; }, payload: string) {
        const token = localStorage.getItem("token");
        commit(LogsMutationType.FETCH_LOGS);
        fetchLogs(payload, String(token))
            .then((response: Log[]) => {
                commit(LogsMutationType.FETCH_LOGS_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(LogsMutationType.FETCH_LOGS_FAIL);
            });
    },
    [LogsActionType.FETCH_FUNCTIONS]({ commit }: { commit: Function; }) {
        const token = localStorage.getItem("token");
        commit(LogsMutationType.FETCH_FUNCTIONS);
        fetchFunctions(String(token))
            .then((response: Functions[]) => {
                commit(LogsMutationType.FETCH_FUNCTIONS_SUCCESS, response);
            })
            .catch(err => {
                console.log(err.message, 'err');
                commit(LogsMutationType.FETCH_FUNCTIONS_FAIL);
            });
    },
    [LogsActionType.SET_SELECTED_FUNCTION]({ commit }: { commit: Function; }, payload: string) {
        commit(LogsMutationType.SET_SELECTED_FUNCTION, payload);
    },
};