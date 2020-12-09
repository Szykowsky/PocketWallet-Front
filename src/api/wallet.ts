import { AddPasswordModel } from "@/models/AddPasswordModel";
import { PasswordWalletFlagModel } from '@/models/PasswordWalletFlagModel';
import { PasswordWalletModel } from '@/models/PasswordWalletModel';
import { SharePasswordModel } from '@/models/SharePasswordModel';
import { Status } from '@/models/Status';

const addPassword = (addPasswordModel: AddPasswordModel, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(addPasswordModel)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const fetchWallet = (token: string): Promise<PasswordWalletFlagModel[]> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: PasswordWalletFlagModel[]) => response);

    return response;
};

const getPasswordById = (id: string, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/password/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const getFullSecurityPasswordById = (id: string, token: string): Promise<PasswordWalletModel> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/full-password/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: PasswordWalletModel) => response);

    return response;
};

const deletePassword = (id: string, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/password/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const sharePassword = (sharePasswordModel: SharePasswordModel, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/password/share`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(sharePasswordModel)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

const editPassword = (payload: PasswordWalletModel, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

export const useWalletMenager = () => {
    return {
        addPassword,
        fetchWallet,
        getPasswordById,
        deletePassword,
        sharePassword,
        getFullSecurityPasswordById,
        editPassword
    };
};