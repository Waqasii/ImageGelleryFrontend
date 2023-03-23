import ProfileHeader from "./ProfileHeader";
import ImageUpload from "./ImageUpload";
import GridView from "./GridView";
import { handleImageUpload } from "../utils/helpers";
import { useQuery } from '@apollo/client';
import { PROFILE_DATA } from '../graphql/query'


const Profile = () => {
    const { data, loading, error } = useQuery(PROFILE_DATA)!;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="profile">
            <ProfileHeader username={data.userInfo.username} totalPictures={data.userInfo.totalPictures} />
            <ImageUpload onUpload={handleImageUpload} />
            <GridView images={data.imagesByUser} />
        </div>
    );
};



export default Profile;