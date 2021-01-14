import { PasswordOperation } from '@/models/PasswordOperation';
import { Status } from '@/models/Status';

const fetchOperations = (id: string, token: string): Promise<PasswordOperation[]> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/operation/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: PasswordOperation[]) => response);

    return response;
};

const restorePassword = (id: string, token: string): Promise<Status> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/wallet/password/restore/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: Status) => response);

    return response;
};

export const useOperationsMenager = () => {
    return {
        fetchOperations,
        restorePassword
    };
};