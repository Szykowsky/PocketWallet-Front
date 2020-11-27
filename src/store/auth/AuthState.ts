import { Authinfo } from '@/models/AuthInfo';

export interface AuthState {
    authInfo: Authinfo | null,
    isLogin: boolean,
    isLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
}

export const authInitialState: AuthState = {
    authInfo: null,
    isLogin: false,
    isError: false,
    isLoading: false,
    errorMessege: null,
    succesMessege: null
};
