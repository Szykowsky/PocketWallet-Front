import { createStore } from "vuex";
import { operationsModule } from "./operations";
import { PasswordOperationState } from "./operations/PasswordOperationsState";
import { authModule } from './auth';
import { AuthState } from './auth/AuthState';
import { logsModule } from "./logs";
import { LogsState } from "./logs/LogsState";
import { walletModule } from './wallet';
import { WalletState } from './wallet/WalletState';

export interface RootState {
    auth: AuthState;
    wallet: WalletState;
    logs: LogsState;
    operations: PasswordOperationState;
}

export default createStore<RootState>({
    modules: {
        auth: authModule,
        wallet: walletModule,
        logs: logsModule,
        operations: operationsModule
    }
});