import React from 'react';
import Image from './Image';
import styles from './GridView.module.css';


type Props = {
    images: {
        id: number;
        imageUrl: string;
        thumbnailUrl: string;
        caption: string;
    }[];
};

const GridView = ({ images }: Props) => {
    return (
        <div className={styles.grid}>
            {images.map(({ id, imageUrl, thumbnailUrl }, index) => (
                <div key={id} className={styles.column} >
                    <Image imageUrl={imageUrl} thumbnailUrl={thumbnailUrl} />
                </div>
            ))}
        </div>
    );
};




export default GridView;
