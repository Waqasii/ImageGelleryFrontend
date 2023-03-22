import { stringify } from 'querystring';
import ReactS3Client from 'react-aws-s3-typescript';
import { s3Config } from './AWSConfig';


interface Response { msg: string | null, success: true | false | null, image_url: string | null }




export const s3ImageUpload = async (file: File) => {
    // Handle the file upload into S3
    console.log("Uploading file:", file.name);
    const response: Response = {
        msg: null, success: null, image_url: null

    }
    const s3 = new ReactS3Client(s3Config);
    const filename = 'waqasii';

    try {
        const res = await s3.uploadFile(file, filename);
        response.msg = "Image Uploaded Successfully";
        response.success = true;
        response.image_url = res.location


    } catch (exception) {
        response.msg = "Error in Uploading Image: " + exception;
        response.success = false;

    }

    return response;


};

const s3Client = new ReactS3Client(s3Config);

export const S3ImageDelete = async (fileUrl: string) => {
    try {
        await s3Client.deleteFile(fileUrl);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error('Error deleting file:', error);
    }
}