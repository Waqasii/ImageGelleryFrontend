import decode from 'jwt-decode';
import { s3ImageUpload, S3ImageDelete } from "../utils/AWSHandler";

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
        console.log("Image filename:", response.img_key);

        // Upload it into database using GRAPHQL API
        // TODO:

    } else {
        console.error(response.msg);
    }
};

export const handleImageDelete = async (imageFilename: string, thumbnailFilename: string) => {
    const response = await S3ImageDelete(imageFilename, thumbnailFilename);
    if (response.success) {
        console.log(response.msg);
        // Delete it from database using GRAPHQL API
        // TODO:

    } else {
        console.error(response.msg);
    }
}




