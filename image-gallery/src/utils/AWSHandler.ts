import { stringify } from 'querystring';
import ReactS3Client from 'react-aws-s3-typescript';
import { s3Config } from './AWSConfig';


interface Response {
    msg: string | null,
    success: true | false,
    image_url: string | null,
    img_key: string | null

}

interface DeleteResponse { msg: string | null, success: true | false | null }




export const s3ImageUpload = async (file: File) => {
    // Handle the file upload into S3
    console.log("Uploading file:", file.name);
    const response: Response = {
        msg: null, success: false, image_url: null, img_key: null

    }
    const s3 = new ReactS3Client(s3Config);
    const filename = 'waqasii';

    try {
        const res = await s3.uploadFile(file, filename);
        response.msg = "Image Uploaded Successfully";
        response.success = true;
        response.image_url = res.location
        response.img_key = res.key


    } catch (exception) {
        response.msg = "Error in Uploading Image: " + exception;
        response.success = false;

    }

    return response;


};

const s3Client = new ReactS3Client(s3Config);

export const S3ImageDelete = async (imageFilename: string, thumbnailFilename: string) => {
    const response: DeleteResponse = {
        msg: null, success: null
    }
    try {
        const result = await s3Client.deleteFile(imageFilename);
        console.log(result)
        await s3Client.deleteFile(thumbnailFilename);
        response.msg = "Image Deleted Successfully";
        response.success = true;

    } catch (err) {
        response.msg = "Error while deleting image file: " + err;
        response.success = true;
    }
    return response;
}