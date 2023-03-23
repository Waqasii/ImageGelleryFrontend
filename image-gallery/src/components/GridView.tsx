import React from 'react';
import Image from './Image';
import styles from './GridView.module.css';


type Props = {
    images: {
        id: number;
        imageUrl: string;
        thumbnailUrl: string;
        imageFilename: string;
        thumbnailFilename: string;
    }[];
    toggleProfileUpdate: () => void;
};

const GridView = ({ images, toggleProfileUpdate }: Props) => {

    return (
        <div className={styles.grid}>
            {images.map(({ id, imageUrl, imageFilename, thumbnailUrl, thumbnailFilename }, index) => (
                <div key={id} className={styles.column} >
                    <Image imageUrl={imageUrl} thumbnailUrl={thumbnailUrl} toggleProfileUpdate={toggleProfileUpdate}
                        imageFilename={imageFilename} thumbnailFilename={thumbnailFilename} />
                </div>
            ))}
        </div>
    );
};




export default GridView;
