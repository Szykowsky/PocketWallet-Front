
import { Functions } from '@/models/Functions';
import { Log } from '@/models/Log';

const fetchLogs = (action: string, token: string): Promise<Log[]> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/logs?action=${action}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: Log[]) => response);

    return response;
};

const fetchFunctions = (token: string): Promise<Functions[]> => {
    const response = fetch(`${process.env.VUE_APP_API_URL}/logs/functions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then((response: Functions[]) => response);

    return response;
};

export const useLogsMenager = () => {
    return {
        fetchLogs,
        fetchFunctions
    };
};