import { BASE_ENDPOINT } from "../../endpoint";

export const signInUserService = async (payload: any) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/user/auth/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const res = await response.json();
        if (!response.ok) {
            console.error('Error:', res);
            throw new Error(res.message);
        }
        return res;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};
