import React, { useState } from 'react';
import styles from './GridView.module.css';
import { useMutation } from '@apollo/client';
import { ADD_IMAGE } from '../graphql/mutation';

type S3_RESPONSE = Promise<{ image_url: string | null; image_filename: string | null; } | null>;

const ImageUpload = ({ onUpload }: { onUpload: (file: File) => S3_RESPONSE }) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadImage] = useMutation(ADD_IMAGE);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        setFile(selectedFile);
        console.log('FileChange');
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const res = await onUpload(file);
            console.log(res);

            // inputs of mutation
            const inputs = {
                input_data: {
                    imageUrl: res?.image_url ?? '',
                    imageFilename: res?.image_filename ?? '',
                },
            };

            try {
                const { data } = await uploadImage({ variables: inputs });
                console.log('After Mutation', data);
            } catch (e) {
                console.log(e);
            }

            setFile(null);
        }
    };


    return (
        <div className={styles.imageUpload}>
            <form onSubmit={handleSubmit}>
                <div className={styles.fileInputContainer}>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.gif"
                        onChange={handleFileChange}
                        id="fileInput"
                        className={styles.fileInput}
                    />
                    <label htmlFor="fileInput" className={styles.chooseFileButton}>
                        +
                    </label>
                    {file && <span className={styles.fileName}>{file.name}</span>}
                    {file && (
                        <button className={styles.uploadButton} type="submit" disabled={!file}>
                            Upload
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ImageUpload;
