import ProfileHeader from "./ProfileHeader";
import ImageUpload from "./ImageUpload";
import GridView from "./GridView";
import { handleImageUpload } from "../utils/helpers";
import { useQuery, useLazyQuery } from '@apollo/client';
import { PROFILE_DATA } from '../graphql/query'
import { useState, useEffect } from "react";


const Profile = () => {
    const { data, loading, error, refetch } = useQuery(PROFILE_DATA)!;
    const [profileUpdate, setProfileUpdate] = useState(false);
    // const [getUserInfo, { data: lazyData, loading: lazyLoading, error: lazyError }] = useLazyQuery(PROFILE_DATA, {
    //     fetchPolicy: "network-only",
    // });


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    const toggleProfileUpdate = () => {
        setProfileUpdate(!profileUpdate);
        // getUserInfo()
        // const data = lazyData
        refetch();
        console.log('Profile Update...')
        console.log('Data Here after lazy ...', data)
    };

    return (
        <div className="profile">
            <ProfileHeader username={data.userInfo.username} totalPictures={data.userInfo.totalPictures} toggleProfileUpdate={toggleProfileUpdate} />
            <ImageUpload onUpload={handleImageUpload} toggleProfileUpdate={toggleProfileUpdate} />
            <GridView images={data.imagesByUser} toggleProfileUpdate={toggleProfileUpdate} />
        </div>
    );
};



export default Profile;