import { BASE_ENDPOINT } from "../../endpoint";

export const galleryUploadService = async (token: string, siteId: string, payload: any) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/user/gallery/${siteId}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: payload
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
