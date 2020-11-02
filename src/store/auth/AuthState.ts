export interface AuthState {
    isLogin: boolean,
    isLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
}

export const authInitialState: AuthState = {
    isLogin: false,
    isError: false,
    isLoading: false,
    errorMessege: null,
    succesMessege: null
};
