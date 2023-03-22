import decode from 'jwt-decode';
import { s3ImageUpload } from "../utils/AWSHandler";

export const verifyToken = (token: string) => {
    const decodedToken: any = decode(token);
    const currentTime = Date.now() / 1000;

    return currentTime < decodedToken.exp;
};


export const handleImageUpload = async (file: File) => {
    const response = await s3ImageUpload(file);
    if (response.success) {
        console.log(response.msg);
        console.log("Image URL:", response.image_url);

        // Upload it into database using GRAPHQL API
        // TODO:

    } else {
        console.error(response.msg);
    }
};




