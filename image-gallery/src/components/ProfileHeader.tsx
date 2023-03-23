import React from 'react';
import styles from './GridView.module.css';

interface ProfileHeaderProps {
    username: string;
    totalPictures: number;
    toggleProfileUpdate: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, totalPictures, toggleProfileUpdate }) => {
    return (
        <div className={styles.profileInfo} >
            < h1 > {username}</h1 >
            <p>Total Pictures: {totalPictures}</p>
        </div >
    );
};

export default ProfileHeader;
