import { logsInitialState } from './LogsState';
import { mutations } from './LogsMutations';
import { actions } from './LogsActions';
import { getters } from './LogsGetters';

export const logsModule = {
    state: logsInitialState,
    mutations,
    actions,
    getters,
};