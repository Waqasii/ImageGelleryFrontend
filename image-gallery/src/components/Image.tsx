import React, { useState } from 'react';
import styles from './GridView.module.css';
import { handleImageDelete } from '../utils/helpers'
interface Props {
    imageUrl: string;
    thumbnailUrl: string;
    imageFilename: string;
    thumbnailFilename: string;
}

const ImagePreview: React.FC<Props> = ({ imageUrl, imageFilename, thumbnailUrl, thumbnailFilename }) => {
    const [showFullImage, setShowFullImage] = useState(false);

    const handlePreviewClick = () => {
        setShowFullImage(true);
    };

    const handleFullImageClick = () => {
        setShowFullImage(false);
    };

    const handleDeleteClick = async (imageURL: string, thumbnailUrl: string) => {

        // Handle delete logic here
        console.log('Delete:', thumbnailUrl)
        await handleImageDelete(imageURL, thumbnailUrl)
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
                    <button className={styles.deleteButton} onClick={() => handleDeleteClick(imageUrl, thumbnailUrl)}>
                        Delete
                    </button>
                </div>
            )
            }
        </>
    );
};

export default ImagePreview;
