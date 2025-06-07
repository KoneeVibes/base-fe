import { BASE_ENDPOINT } from "../../endpoint";

export const deleteGalleryService = async (token: string, projectId: string, galleryId: string) => {
    try {
        const response = await fetch(`${BASE_ENDPOINT}/user/gallery/${projectId}/${galleryId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
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
