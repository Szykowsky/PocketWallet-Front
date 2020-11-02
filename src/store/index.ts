import { createStore } from "vuex";
import { authModule } from './auth';
import { AuthState } from './auth/AuthState';
import { walletModule } from './wallet';
import { WalletState } from './wallet/WalletState';

export interface RootState {
    auth: AuthState;
    wallet: WalletState;
}

export default createStore<RootState>({
    modules: {
        auth: authModule,
        wallet: walletModule
    }
});