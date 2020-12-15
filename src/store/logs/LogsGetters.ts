import { Functions } from '@/models/Functions';
import { Log } from '@/models/Log';
import { LogsState } from './LogsState';

export const getters = {
    getLogsIsLoadingFlag(state: LogsState): boolean {
        return state.isLoading;
    },
    getLogsErrorMessage(state: LogsState): string | null {
        return state.errorMessege;
    },
    getLogsSuccesMessage(state: LogsState): string | null {
        return state.succesMessege;
    },
    getLogs(state: LogsState): Log[] {
        return state.logs;
    },
    getFunctions(state: LogsState): Functions[] {
        return state.functions;
    },
    getSelectedFunction(state: LogsState) {
        return state.selectedFunction;
    }
};