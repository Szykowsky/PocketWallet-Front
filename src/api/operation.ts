import { PasswordOperation } from '@/models/PasswordOperation';

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

export const useOperationsMenager = () => {
    return {
        fetchOperations,
    };
};