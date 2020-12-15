import store from "../index";
import { dispatch } from '@/store/utils';
import { LogsActionType } from './LogsActions';
import { Log } from "@/models/Log";
import { Functions } from "@/models/Functions";

export const useLogsFacade = () => {
    return {
        resetMessages() {
            dispatch(LogsActionType.RESET_MESSAGES);
        },
        fetchLogs(action: string) {
            dispatch(LogsActionType.FETCH_LOGS, action);
        },
        fetchFunctions() {
            dispatch(LogsActionType.FETCH_FUNCTIONS);
        },
        setSlectedFunction(action: string) {
            dispatch(LogsActionType.SET_SELECTED_FUNCTION, action);
        },
        getErrorMessage(): string | null {
            return store.getters.getLogsErrorMessage;
        },
        getIsLoadingFlag(): boolean {
            return store.getters.getLogsIsLoadingFlag;
        },
        getSuccesMessage(): string | null {
            return store.getters.getLogsSuccesMessage;
        },
        getLogs(): Log[] {
            return store.getters.getLogs;
        },
        getFunctions(): Functions[] {
            return store.getters.getFunctions;
        },
        getSelectedFunction(): string {
            return store.getters.getSelectedFunction;
        }
    };
};