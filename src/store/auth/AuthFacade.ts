import store from "../index";
import { dispatch } from '@/store/utils';
import { AuthActionType } from './AuthActions';
import { LoginModel } from '@/models/LoginModel';
import { RegisterModel } from '@/models/RegisterModel';
import { ChangePasswordModel } from '@/models/ChangePasswordModel';

export const useAuthFacade = () => {
    return {
        getIsLoginFlag(): boolean {
            return store.getters.getIsLoginFlag;
        },
        signIn(loginModel: LoginModel) {
            dispatch(AuthActionType.SIGN_IN, loginModel);;
        },
        signUp(registerModel: RegisterModel) {
            dispatch(AuthActionType.SIGN_UP, registerModel);;
        },
        signOut() {
            dispatch(AuthActionType.SIGN_OUT);;
        },
        changePassword(changePasswordModel: ChangePasswordModel) {
            dispatch(AuthActionType.CHANGE_PASSWORD, changePasswordModel);;
        },
        resetMessages() {
            dispatch(AuthActionType.RESET_MESSAGES);
        },
        getErrorMessage(): string | null {
            return store.getters.getErrorMessage;
        },
        getIsLoadingFlag(): string {
            return store.getters.getIsLoadingFlag;
        },
        getSuccesMessage(): string {
            return store.getters.getSuccesMessage;
        }
    };
};