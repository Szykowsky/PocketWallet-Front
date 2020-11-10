import { AddPasswordModel } from "@/models/AddPasswordModel";
import { PasswordWalletModel } from '@/models/PasswordWalletModel';
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

const fetchWallet = (token: string): Promise<PasswordWalletModel[]> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: PasswordWalletModel[]) => response);

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

export const useWalletMenager = () => {
    return {
        addPassword,
        fetchWallet,
        getPasswordById
    };
};