import { passwordOperationInitialState } from './PasswordOperationsState';
import { mutations } from './PasswordOperationsMutations';
import { actions } from './PasswordOperationsActions';
import { getters } from './PasswordOperationsGetters';

export const operationsModule = {
    state: passwordOperationInitialState,
    mutations,
    actions,
    getters,
};