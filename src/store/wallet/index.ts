import { walletInitialState } from './WalletState';
import { mutations } from './WalletMutations';
import { actions } from './WalletActions';
import { getters } from './WalletGetters';

export const walletModule = {
    state: walletInitialState,
    mutations,
    actions,
    getters,
};