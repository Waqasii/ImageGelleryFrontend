import ProfileHeader from "./ProfileHeader";
import ImageUpload from "./ImageUpload";
import GridView from "./GridView";
import { handleImageUpload } from "../utils/helpers";
import { useQuery } from '@apollo/client';
import { ALL_IMGAES_QUERY } from '../graphql/query'


const images = [
    {
        id: 1,
        imageUrl: 'https://resizeimgbuck.s3.eu-north-1.amazonaws.com/waqasii.png',
        thumbnailUrl: 'https://resizeimgbuck.s3.eu-north-1.amazonaws.com/waqasii-resized.png',
        imageFilename: 'waqasii.png',
        thumbnailFilename: 'waqasii-resized.png',
    },
    {
        id: 2,
        imageUrl: 'https://loremflickr.com/800/600',
        thumbnailUrl: 'https://loremflickr.com/300/300',
        imageFilename: 'temp.png',
        thumbnailFilename: 'temp-resize.png',
    },
    {
        id: 3,
        imageUrl: 'https://source.unsplash.com/500x300/?nature,water',
        thumbnailUrl: 'https://source.unsplash.com/300x300/?nature,water',
        imageFilename: 'temp.png',
        thumbnailFilename: 'temp-resize.png',
    },
    {
        id: 4,
        imageUrl: 'https://source.unsplash.com/500x300/?nature,water',
        thumbnailUrl: 'https://source.unsplash.com/300x300/?nature,water',
        imageFilename: 'temp.png',
        thumbnailFilename: 'temp-resize.png',
    },

];

const Profile = () => {
    const { data, loading, error } = useQuery(ALL_IMGAES_QUERY)!;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(images)
    return (
        <div className="profile">
            <ProfileHeader username="Waqasii" totalPictures={13} />
            <ImageUpload onUpload={handleImageUpload} />
            <GridView images={data.imagesByUser} />
        </div>
    );
};



export default Profile;