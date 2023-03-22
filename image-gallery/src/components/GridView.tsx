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
};

const GridView = ({ images }: Props) => {
    return (
        <div className={styles.grid}>
            {images.map(({ id, imageUrl, imageFilename, thumbnailUrl, thumbnailFilename }, index) => (
                <div key={id} className={styles.column} >
                    <Image imageUrl={imageUrl} thumbnailUrl={thumbnailUrl}
                        imageFilename={imageFilename} thumbnailFilename={thumbnailFilename} />
                </div>
            ))}
        </div>
    );
};




export default GridView;
