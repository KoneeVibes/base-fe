import { BASE_ENDPOINT } from "../../endpoint";

export const updateGalleryService = async (token: string, projectId: string, galleryId: string, payload: any) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/user/gallery/${projectId}/${galleryId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
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
