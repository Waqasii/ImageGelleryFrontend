import React, { useState } from 'react';
import styles from './GridView.module.css';
import { handleImageDelete } from '../utils/helpers'
import { useMutation } from '@apollo/client';
import { DELETE_IMAGE } from '../graphql/mutation';
interface Props {
    imageUrl: string;
    thumbnailUrl: string;
    imageFilename: string;
    thumbnailFilename: string;
    toggleProfileUpdate: () => void;
}

const ImagePreview: React.FC<Props> = ({ imageUrl, imageFilename, thumbnailUrl, thumbnailFilename, toggleProfileUpdate }) => {
    const [showFullImage, setShowFullImage] = useState(false);
    const [deleteImage] = useMutation(DELETE_IMAGE);

    const handlePreviewClick = () => {
        setShowFullImage(true);
    };

    const handleFullImageClick = () => {
        setShowFullImage(false);
    };

    const handleDeleteClick = async (imageFilename: string, thumbnailFilename: string) => {

        // Handle delete logic here
        console.log('Delete:', thumbnailUrl)
        await handleImageDelete(imageFilename, thumbnailFilename)

        // delete from database
        // inputs of mutation
        const inputs = {
            input_data: {
                imageFilename: imageFilename,
            },
        };

        try {
            const { data } = await deleteImage({ variables: inputs });
            console.log('After deletion', data);
            toggleProfileUpdate(); // update the state
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <>
            {!showFullImage ? (
                <div className={styles.thumbnailContainer} onClick={handlePreviewClick}>
                    <img className={styles.thumbnailImage} src={thumbnailUrl} alt="thumbnail preview" />
                </div>
            ) : (
                <div className={styles.fullImageContainer} onClick={handleFullImageClick}>
                    <img className={styles.FullImage} src={imageUrl} alt="full-size image" />
                    <button className={styles.deleteButton} onClick={() => handleDeleteClick(imageFilename, thumbnailFilename)}>
                        Delete
                    </button>
                </div>
            )
            }
        </>
    );
};

export default ImagePreview;
