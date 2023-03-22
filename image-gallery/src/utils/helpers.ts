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

        return { image_url: response.image_url, image_filename: response.img_key }

    } else {
        console.error(response.msg);
        return null
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



