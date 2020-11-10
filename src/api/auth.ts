import { ChangePasswordModel } from '@/models/ChangePasswordModel';
import { LoginModel } from "@/models/LoginModel";
import { RegisterModel } from '@/models/RegisterModel';
import { Status } from '@/models/Status';

const signIn = (loginModel: LoginModel): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginModel)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const signUp = (registerModel: RegisterModel): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerModel)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const changePassword = (changePasswordModel: ChangePasswordModel, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/auth/password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(changePasswordModel)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

export const useAuthMenager = () => {
    return {
        signIn,
        signUp,
        changePassword
    };
};