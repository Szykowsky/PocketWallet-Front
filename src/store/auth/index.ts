import { authInitialState } from './AuthState';
import { mutations } from './AuthMutations';
import { actions } from './AuthActions';
import { getters } from './AuthGetters';

export const authModule = {
    state: authInitialState,
    mutations,
    actions,
    getters,
};