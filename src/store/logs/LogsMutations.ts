import { Functions } from '@/models/Functions';
import { Log } from '@/models/Log';
import { LogsState } from './LogsState';

export enum LogsMutationType {
    RESET_MESSAGES = 'RESET_MESSAGES',
    FETCH_LOGS = 'FETCH_LOGS',
    FETCH_LOGS_SUCCESS = 'FETCH_LOGS_SUCCESS',
    FETCH_LOGS_FAIL = 'FETCH_LOGS_FAIL',
    FETCH_FUNCTIONS = 'FETCH_FUNCTIONS',
    FETCH_FUNCTIONS_SUCCESS = 'FETCH_FUNCTIONS_SUCCESS',
    FETCH_FUNCTIONS_FAIL = 'FETCH_FUNCTIONS_FAIL',
    SET_SELECTED_FUNCTION = 'SET_SELECTED_FUNCTION'
}

export const mutations = {
    [LogsMutationType.RESET_MESSAGES](state: LogsState) {
        state.errorMessege = null;
        state.succesMessege = null;
        return state;
    },
    [LogsMutationType.FETCH_LOGS](state: LogsState) {
        state.isLoading = true;
        return state;
    },
    [LogsMutationType.FETCH_LOGS_SUCCESS](state: LogsState, payload: Log[]) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.logs = payload;
        return state;
    },
    [LogsMutationType.FETCH_LOGS_FAIL](state: LogsState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        state.logs = [];
        return state;
    },
    [LogsMutationType.FETCH_FUNCTIONS](state: LogsState) {
        state.isLoading = true;
        return state;
    },
    [LogsMutationType.FETCH_FUNCTIONS_SUCCESS](state: LogsState, payload: Functions[]) {
        state.isLoading = false;
        state.isError = false;
        state.errorMessege = null;
        state.functions = payload;
        return state;
    },
    [LogsMutationType.FETCH_FUNCTIONS_FAIL](state: LogsState, payload: string) {
        state.isLoading = false;
        state.isError = true;
        state.errorMessege = payload;
        state.succesMessege = null;
        state.functions = [];
        return state;
    },
    [LogsMutationType.SET_SELECTED_FUNCTION](state: LogsState, action: string) {
        state.selectedFunction = action;
    }
};