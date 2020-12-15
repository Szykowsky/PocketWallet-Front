import { Functions } from '@/models/Functions';
import { Log } from '@/models/Log';

export interface LogsState {
    logs: Log[],
    functions: Functions[],
    selectedFunction: string,
    isLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
}

export const logsInitialState: LogsState = {
    logs: [],
    functions: [],
    selectedFunction: "All",
    isError: false,
    isLoading: false,
    errorMessege: null,
    succesMessege: null,
};
