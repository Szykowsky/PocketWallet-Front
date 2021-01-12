import { PasswordOperation } from '@/models/PasswordOperation';

export interface PasswordOperationState {
    operations: PasswordOperation[],
    isLoading: boolean,
    isError: boolean;
    errorMessege: string | null;
    succesMessege: string | null;
}

export const passwordOperationInitialState: PasswordOperationState = {
    operations: [],
    isError: false,
    isLoading: false,
    errorMessege: null,
    succesMessege: null,
};
